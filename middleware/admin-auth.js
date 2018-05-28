export default function ({ store, route, redirect }) {
  if (!Object.keys(store.state.admin).length) {
    return redirect('/login')
  }
}
