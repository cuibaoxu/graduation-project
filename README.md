卷 Data 的文件夹 PATH 列表
卷序列号为 8AAB-4494
D:.
│  .browserslistrc
│  .editorconfig
│  .env.development
│  .env.production
│  .env.test
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc
│  auto-imports.d.ts
│  babel.config.js
│  commitlint.config.js
│  components.d.ts
│  directoryList.md
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│  vue.config.js
│  
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │  
│  └─_
│          .gitignore
│          husky.sh
│          
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue
    │  main.ts
    │  shims-vue.d.ts
    │  
    ├─assets
    │  │  logo.png
    │  │  
    │  ├─css
    │  │      base.less
    │  │      index.css
    │  │      
    │  └─img
    │          login-bg.svg
    │          logo.svg
    │          
    ├─base-ui
    │  ├─breadcrumb
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      breadcrumb.vue
    │  │  │      
    │  │  └─type
    │  │          index.ts
    │  │          
    │  ├─card
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          card.vue
    │  │          
    │  ├─code
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          code.vue
    │  │          
    │  ├─descriptions
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      descriptions.vue
    │  │  │      
    │  │  └─types
    │  │          types.ts
    │  │          
    │  ├─echarts
    │  │  │  index.ts
    │  │  │  
    │  │  ├─data
    │  │  │      china.json
    │  │  │      
    │  │  ├─hooks
    │  │  │      useEcharts.ts
    │  │  │      
    │  │  └─src
    │  │          base-echart.vue
    │  │          
    │  ├─form
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      form.vue
    │  │  │      
    │  │  └─types
    │  │          index.ts
    │  │          
    │  ├─table
    │  │  │  index.ts
    │  │  │  types.ts
    │  │  │  
    │  │  └─src
    │  │          Table.vue
    │  │          
    │  └─text-link
    │      │  index.ts
    │      │  
    │      └─src
    │              textlink.vue
    │              
    ├─components
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          nav-header.vue
    │  │          
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          nav-menu.vue
    │  │          
    │  ├─page-charts
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      bar-echart.vue
    │  │  │      line-echart.vue
    │  │  │      map-echart.vue
    │  │  │      pie-echart.vue
    │  │  │      rose-echart.vue
    │  │  │      
    │  │  ├─types
    │  │  │      index.ts
    │  │  │      
    │  │  └─utils
    │  │          convert-data.ts
    │  │          coordinate-data.ts
    │  │          
    │  ├─page-content
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          page-content.vue
    │  │          
    │  ├─page-modal
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          page-modal.vue
    │  │          
    │  └─page-search
    │      │  index.ts
    │      │  
    │      └─src
    │              page-search.vue
    │              
    ├─enums
    │  ├─analysis
    │  ├─product
    │  │      goods.ts
    │  │      
    │  ├─story
    │  └─system
    │          user.ts
    │          
    ├─global
    │      index.ts
    │      register-properties.ts
    │      
    ├─hook
    │      usePageModal.ts
    │      usePageSearch.ts
    │      usePermission.ts
    │      
    ├─router
    │  │  index.ts
    │  │  
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │      
    │      │  └─overview
    │      │          overview.ts
    │      │          
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │      
    │      │  └─goods
    │      │          goods.ts
    │      │          
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │      
    │      │  └─list
    │      │          list.ts
    │      │          
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │      
    │          ├─menu
    │          │      menu.ts
    │          │      
    │          ├─role
    │          │      role.ts
    │          │      
    │          └─user
    │                  user.ts
    │                  
    ├─service
    │  │  axios_demo.ts
    │  │  index.ts
    │  │  types.ts
    │  │  
    │  ├─login
    │  │      login.ts
    │  │      type.ts
    │  │      
    │  ├─main
    │  │  ├─analysis
    │  │  │      dashboard.ts
    │  │  │      
    │  │  └─system
    │  │          system.ts
    │  │          
    │  └─request
    │          config.ts
    │          index.ts
    │          type.ts
    │          
    ├─store
    │  │  index.ts
    │  │  types.ts
    │  │  
    │  ├─login
    │  │      login.ts
    │  │      types.ts
    │  │      
    │  └─mian
    │      ├─analysis
    │      │      dashboard.ts
    │      │      types.ts
    │      │      
    │      ├─product
    │      └─system
    │              system.ts
    │              type.ts
    │              
    ├─utils
    │      business.ts
    │      cache.ts
    │      map-menus.ts
    │      maths.ts
    │      
    └─views
        ├─login
        │  │  login.vue
        │  │  
        │  ├─components
        │  │      login-account.vue
        │  │      login-panel.vue
        │  │      login-phone.vue
        │  │      
        │  ├─config
        │  │      account-config.ts
        │  │      phone-config.ts
        │  │      
        │  └─hook
        ├─main
        │  │  main.vue
        │  │  
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │      dashboard.vue
        │  │  │      
        │  │  └─overview
        │  │      │  overview.vue
        │  │      │  
        │  │      └─config
        │  │              dependencies.ts
        │  │              dev-dependencies.ts
        │  │              index.ts
        │  │              project-dir.ts
        │  │              technology-stacks.ts
        │  │              
        │  ├─product
        │  │  ├─category
        │  │  │  │  category.vue
        │  │  │  │  
        │  │  │  └─config
        │  │  │          content.config.ts
        │  │  │          search.config.ts
        │  │  │          
        │  │  └─goods
        │  │      │  goods.vue
        │  │      │  
        │  │      └─config
        │  │              content.config.ts
        │  │              search.config.ts
        │  │              
        │  ├─story
        │  │  ├─chat
        │  │  │      chat.vue
        │  │  │      
        │  │  └─list
        │  │          list.vue
        │  │          
        │  └─system
        │      ├─department
        │      │  │  department.vue
        │      │  │  
        │      │  └─config
        │      │          content.config.ts
        │      │          modal.config.ts
        │      │          search.config.ts
        │      │          
        │      ├─menu
        │      │  │  menu.vue
        │      │  │  
        │      │  └─config
        │      │          content.config.ts
        │      │          
        │      ├─role
        │      │  │  role.vue
        │      │  │  
        │      │  └─config
        │      │          content.config.ts
        │      │          modal.config.ts
        │      │          search.config.ts
        │      │          
        │      └─user
        │          │  user.vue
        │          │  
        │          └─config
        │                  content.config.ts
        │                  modal.config.ts
        │                  search.config.ts
        │                  
        └─not-found
                not-found.vue
                
