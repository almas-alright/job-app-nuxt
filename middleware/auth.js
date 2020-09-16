export default function ({auth, redirect }) {
    
    if ( ! auth.storage.getCookie('token') ) {
      return redirect('/');
    }
}