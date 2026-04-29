import { Component, Input, Output, EventEmitter, OnInit, signal, computed } from '@angular/core'
import { NgClass, DatePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'

interface User {
  id: number
  name: string
  role: 'admin' | 'viewer'
  joinedAt: Date
}

@Component({
  selector: 'app-user-list',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css',
  imports: [NgClass, DatePipe, FormsModule],
})
export class UserListComponent implements OnInit {
  @Input() title = 'Users'
  @Input() maxVisible = 10
  @Output() userSelected = new EventEmitter<User>()

  users = signal<User[]>([])
  query = signal('')
  loading = signal(false)

  filtered = computed(() =>
    this.users().filter(u =>
      u.name.toLowerCase().includes(this.query().toLowerCase())
    )
  )

  ngOnInit(): void {
    this.loadUsers()
  }

  private async loadUsers(): Promise<void> {
    this.loading.set(true)
    try {
      const res = await fetch('/api/users')
      this.users.set(await res.json())
    } finally {
      this.loading.set(false)
    }
  }

  select(user: User): void {
    this.userSelected.emit(user)
  }

  isAdmin(user: User): boolean {
    return user.role === 'admin'
  }
}
