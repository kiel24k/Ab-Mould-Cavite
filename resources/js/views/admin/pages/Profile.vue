<template>
    <div class="profile">
        <div class="">
            <Sidebar/>
        </div>
        <div class="main">
            <div class="content">
               <div class="me">
                <img src="/public/icon/user-profile.svg" height="100px" alt="">
                <div class="details">
                    <b>Fname Lname</b>
                <small>Department</small>
                </div>
               </div>
               <div class="inputs">
                <form action="">
                    <div class="fname">
                        <input type="text" placeholder="First name">
                    </div>
                    <div class="lname">
                        <input type="text" placeholder="Last Name">
                    </div>
                    <div class="mname">
                        <input type="text" placeholder="Middle Name">
                    </div>
                    <div class="email">
                        <input type="text" placeholder="Email">
                    </div>
                    <div class="birthday">
                        <input type="date" >
                    </div>
                    <div class="submit text-end">
                        <button class="btn btn-info text-white">
                            <b>update</b>
                        </button>
                    </div>
                    <div class="change-pass text-white text-end">
                        <button class="btn btn-danger">
                            <b>Change Password</b>
                        </button>
                    </div>
                </form>
               </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import Sidebar from '../partials/Sidebar.vue'
</script>

<style scoped>
.profile .main{
    width: 100%;
    display: flex;
}
.profile{
    display: flex;
}
.profile .content{
    width: 40%;
    padding:10px;
    border-radius: 25px;
    margin:auto;
   display: grid;
   justify-content: center;
   gap:50px;
box-shadow: 0px 0px 10px 0px gray;


}
.profile .me {
    display: flex;
    align-content: center;
    align-items: center;

}
.profile .me .details{
    display: grid;
}
.profile form > div{

}
.profile form{
   display: grid;
   gap:25px;
}
.profile form input{
    width: 25rem;
    border-top:0px;
    border-left:0px;
    border-right:0px;

}
.profile form input:focus{
   outline: none;
}
</style>
