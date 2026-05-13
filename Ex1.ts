type User = {
    name: string
    age: number
    active: boolean
}
const users: User[] = [
  { name: 'Ana', age: 17, active: true },
  { name: 'Diego', age: 25, active: true },
  { name: 'Carla', age: 22, active: true },
  { name: 'Bruno', age: 25, active: false },
  { name: 'Eva', age: 15, active: true },
]

const UserFilter = users.filter(item => item.active === true && item.age >= 18);
console.log(UserFilter);

export const UserSort = UserFilter.sort((a, b) => a.name.localeCompare(b.name));
console.log(UserSort);
//Sla mudança pra ter na main e na feltch