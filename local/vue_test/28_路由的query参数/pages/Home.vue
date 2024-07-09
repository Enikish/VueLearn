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
      <router-view>
      </router-view>
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