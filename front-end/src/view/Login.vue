
<template>
  <section>
    <article class="wrapper-article">
      <article class="left-article"><img src="../assets/icon.gif" /></article>
      <article class="right-article">
        <div>空间登录</div>
        <form action="">
          <p class="name">用户名: <input class="name-input" type="text" name="fname" placeholder="请输入用户名" /></p>
          <p class="name">密&nbsp;&nbsp;&nbsp;&nbsp;码: <input class="name-input" type="text" name="lname" placeholder="请输入密码"/></p>
          <input class="submit" type="submit" value="登录" />
        </form>
        <div @click="handlerClick" class="footer">使用GitHub登录</div>
      </article>
    </article>

  </section>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)

const handlerClick = async () => {
  const resData = await fetch('http://127.0.0.1:3000/loginGitHub').then(response => {
    // console.log(response)
    return response.text()
  })
  const url = JSON.parse(resData).data.code_url
  // console.
  const strWindowFeatures = 'width: 600, height: 400, top: 30, left: 50, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no'
  const authorizeWindow = window.open(url, 'github', strWindowFeatures)

}
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
form {
  margin-top: 27px;
}
.name-input {
  border: none;
  height: 35px;
  border-radius: 5px;
  padding-left: 10px;
}
.name {
  font-size: 18px;
}
.footer {
  margin-top: 30px;
  cursor: pointer;
}
.submit {
  margin-top: 10px;
  width: calc(100%);
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #333;
  color: #eee;
}
img {
  width: 400px;
  height: 100%;
}
</style>
