// export default function ({auth, redirect }) {
    
//     if ( ! auth.storage.getCookie('token') ) {
//       return redirect('/');
//     }
// }

export default function ({ store, redirect }) {
  console.log(store.state.auth.loggedIn)
  if (store.state.auth.loggedIn) {
    return redirect('/')
  }
}