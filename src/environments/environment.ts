// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: {
    google: '183152507346-v00otvc138vg4ko67cibst218bsrc9ni.apps.googleusercontent.com',
    facebook: '639964903775514',
  },
  apiExternal: {
    globaly: {
      url: 'http://localhost:3005/v1/',
      api: {
        country: 'country'
      }
    },
  },
  api: {
    authentication : {
      signIn: 'api/auth/signin',
      signUp: 'api/auth/signup',
      google: 'api/auth/google',
      facebook: 'api/auth/facebook'
    },
    user: {
      byId: 'api/user/id/',
      byToken: 'api/user/token',
      update: 'api/user/update',
      activate: 'api/user/activate/',
      deactivate: 'api/user/deactivate/',
      softDelete: 'api/user/soft-delete/',
      delete: 'api/user/delete/'
    },
    contact: {
      list: 'api/contact/list',
      create: 'api/contact/create',
    },
    worker: {
      list: 'api/worker/list',
      create: 'api/worker/create'
    },
    company: {
      admin: {
        list: 'api/company/admin/list'
      }
    },
    widget: {
      contact: {
        counter: 'api/widget/contact/counter'
      }
    }
  },
  images : {
    identity: {
      logo: '/assets/icons/identity/analyse_base_icon.png'
    },
    social: {
      google: '/assets/icons/social/google-icon-100x100.png',
      facebook: '/assets/icons/social/facebook-icon-100x100.png'
    },
    background: {
      login: [
        {
          image: '/assets/images/login/01.jpg',
          alt: 'login image'
        }, {
          image: '/assets/images/login/02.jpg',
          alt: 'login image'
        }, {
          image: '/assets/images/login/03.jpg',
          alt: 'login image'
        }, {
          image: '/assets/images/login/04.jpg',
          alt: 'login image'
        },
      ]

    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
