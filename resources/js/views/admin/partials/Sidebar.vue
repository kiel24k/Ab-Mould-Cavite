<template>
    <div>
        <aside>
            <div class="title">
               <img src="/public/background/abMouldLogo.png" width="200px" alt="">
            </div>
            <div class="dashboard">
                <ul class="navbar nav">
                    <li class="nav-item title-dashboard">
                            <b>Dashboard</b>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'admin-accounts'}"  class="nav-link">
                            <img src="/public/icon/inventoryIcon.svg" width="25px" alt="">
                            <b>Inventory</b>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'admin-analytics'}" class="nav-link">
                            <img src="/public/icon/analyticsIcon.svg" width="25px" alt="">
                            <b>Analytics</b>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">
                            <img src="/public/icon/schedulingIcon.svg" width="25px" alt="">
                            <b>Scheduling</b>
                        </a>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'admin-accounts'}"  class="nav-link">
                            <img src="/public/icon/accountsIcon.svg" width="25px" alt="">
                            <b>Accounts</b>
                        </router-link>
                    </li>
                    <li class="nav-item">
                           <a href="" class="nav-link">
                            <img src="/public/icon/analyticsIcon.svg" width="25px" alt=""> <b>Settings</b>
                        </a>
                    </li>
                    <li class="nav-item">
                            <a href="" class="nav-link text-danger"><b>Logout</b></a>
                    </li>
                </ul>
            </div>

        </aside>

    </div>
</template>
<style scoped>
    aside {
        left:0;
        position:relative;
        height: 100vh;
        background: rgb(241, 237, 237);
        width:15rem;
    }
    aside .navbar{
        display: grid;
        gap:25px;
    }
    aside .nav-item{
        width:15rem;
        padding:10px;
    }
    aside .nav-item:hover{
        background: rgb(204, 202, 202);
    }
    aside .title-dashboard{
        border-radius: 15px;
        background: white;
        padding:10px;
        text-align: center;
    }
    aside .title-dashboard:hover{
        background: white;
    }
    aside .nav-item a{
        color:gray;
        display: flex;
        gap:10px;
        align-content: center;
        align-items: center;
    }

</style>
