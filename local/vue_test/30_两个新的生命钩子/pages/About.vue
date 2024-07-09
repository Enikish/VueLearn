<template>
  <div>
    <h2>About内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item" href="./home-news.html"></a> -->
          <router-link to="/home/news" active-class="active" class="list-group-item">
            News
          </router-link>
        </li>
        <li>
          <!-- <a class="list-group-item" href="./home-message.html"></a> -->
          <router-link to="/home/message" active-class="active" class="list-group-item">
            Message
          </router-link>
        </li>
      </ul>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style>

</style>