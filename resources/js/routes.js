//import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

function lazyLoad(pages){
    //return() => import(`@/views/${pages}.vue`)
    return() => import(`./pages/${pages}.vue`)
  }


export default{
    mode: 'history',
   
    routes: [
        {
            path: '*',
            name: 'all',
            component: lazyLoad('Dashboard'),
        },
     
            //for me
            {
                path: '/',
                name: 'Home',
                component: lazyLoad('Home'),
              
              },
          {
            path: '/Home',
            name: 'Dashboard',
            component: lazyLoad('Dashboard'),
            beforeEnter: (to, from, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
          },

          {
            path: '/Invoice_estimate',
            name: 'Invoice_estimate',
            component: lazyLoad('Invoice_estimate'),
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
          },
          {
            path: '/Admin',
            name: 'Admin',
            component: lazyLoad('Admin')
          },
          {
            path: '/Admin-Ship-Schedule',
            name: 'Admin-Ship-Schedule',
            component: lazyLoad('Admin-Ship-Schedule'),
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
          },
          {
            path: '/Admins',
            name: 'Admins',
            component: lazyLoad('Admins'),
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
          },
      
          {
            path: '/Registration',
            name: 'Registration',
            component: lazyLoad('Registration')
          },
          {
            path: '/User-Table',
            name: 'User-Table',
            component: lazyLoad('User'),
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
          },
          {
            path: '/Enquiries',
            name: 'Enquiries',
            component: lazyLoad('Enquiries'),
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
          },
          {
            path: '/Payment',
            name: 'Payment',
            component: lazyLoad('Payment'),
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
          },
          {
            path: '/Login',
            name: 'Login',
            component: lazyLoad('Login'),
            // beforeEnter: (to, form, next) =>{
            //     axios.get('/api/athenticated').then(()=>{
                    
            //         next()
            //         //return next({ name: 'Dashboard'})
            //     }).catch(()=>{
            //         return next({ name: 'Login'})
                  
            //     })
            // }
        
             
        
            
          },
          
    ]
}


 //original for testing
        // {
        //     path: '/register',
        //     component: Register
        // },
        // {
        //     path: '/logins',
        //     component: Login,
        //     name: 'Logins'
        // },
        // {
        //     path: "/dashboard",
        //     name: "Dashboard",
        //     component: Dashboard,
        //    beforeEnter: (to, form, next) =>{
        //        axios.get('/api/athenticated').then(()=>{
        //            next()
        //        }).catch(()=>{
        //            return next({ name: 'Login'})
        //        })
        //    }
       
        //   },
            //original for testing

