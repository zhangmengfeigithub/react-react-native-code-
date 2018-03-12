<NavigatorIOS
                           initialRoute={{
                               component: Home,    // 要跳转的页面
                               title:'首页',    // 跳转页面导航栏标题
                               
                           }}
                           configureScene = {(route)=>{
                             return NavigatorIOS.SceneConfigs.FloatFromBottom
                           }}
                           renderScene={(route,navigator)=>{
                             let Home = route.component
                             return <Home  {...route.params} navigator={navigator}/>
                           }}
                           
                           style={{flex:1}}  // 此项不设置,创建的导航控制器只能看见导航条而看不到界面
                       />