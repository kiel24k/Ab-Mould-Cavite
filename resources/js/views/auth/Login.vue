<template>
    <div>
        <div id="login">
            <div class=" login">
                <div class="title">
                    <h1>Login</h1>
                </div>
                <form action="admin-accounts">
                    <div class="form-group">
                        <label for=""><b>Email</b></label>
                        <input type="text" class="form-control" placeholder="Enter Email">
                    </div>
                    <div class="form-group">
                        <label for=""><b>Password</b></label>
                        <input type="text" class="form-control" placeholder="Enter Password">
                    </div>
                    <div class="submit ">
                        <button class="btn btn-info text-white"><b>Login</b></button>
                    </div>
                    <div class="forgot-password">
                        <a href="">forgot password</a>
                    </div>

                </form>
            </div>
            <div class="logo">
                <img src="/public/background/abMouldLogo.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
#login{
    position:fixed;
    top:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap:25px;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

}
#login > div{
    width: 40rem;
    height: 50%;

}
.login{
display: grid;
justify-content: center;
align-content: center;
gap:25px;
background:rgb(146,178,202, 0.7);
backdrop-filter: blur(50px);
border-radius: 40px;

}
form{
    display: grid;
    gap:25px;
}
.login form input{
    width:25rem;
}
.login form a{
    color:gray;
    text-decoration: none;
}

.login .title{
    text-align: center;
}
.login .title h1{
    font-size: 3rem;
    font-weight: bolder;
}
.login .forgot-password{
    text-align: center;
}
.login .submit, .login .submit button {
    width: 100%;
    border-radius: 10px;
    height: 3rem;
    background: #4caaf3;
}
#login .logo{
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
}

</style>
