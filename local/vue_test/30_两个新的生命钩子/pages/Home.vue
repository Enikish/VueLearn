<template>
  <div>
    <h2>Home内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item" href="./home-news.html"></a> -->
          <router-link class="list-group-item" active-class="active"  to="/home/news">
            News
          </router-link>
        </li>
        <li>
          <!-- <a class="list-group-item" href="./home-message.html"></a> -->
          <router-link class="list-group-item" active-class="active"  to="/home/message">
            Message
          </router-link>
        </li>
      </ul>
      <!-- 使用keep alive缓存数据， 使用include或者exclude来指定缓存/不缓存哪个组件，以组件名 不使用的话就所有的都缓存 -->
      <keep-alive include="['News', ]">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home', 
}
</script>

<style>

</style>