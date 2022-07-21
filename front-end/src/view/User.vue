
<template>
  <section>
    <article class="wrapper-article">
      <article class="left-article"><img src="../assets/icon.gif" /></article>
      <article class="right-article">
        <div>欢迎！</div>
        <div class="avatar-title">
          <img class="avatar" src="" />
          <div class="title">昵称：</div>
        </div>
      </article>
    </article>
  </section>
</template>
<script setup>

</script>

<style scoped>
a {
  color: #42b983;
}
section {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.wrapper-article {
  display: flex;
  width: 800px;
  height: 400px;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 3px #eee;
  overflow: hidden;
}
.right-article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.avatar-title {
  margin-top: 35px;
  text-align: center;
}

.avatar-title .avatar {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}

.avatar-title .title {
  margin-top: 20px;
}

img {
  width: 400px;
  height: 100%;
}
</style>
