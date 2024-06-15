<template>
      <div class="inventory">
        <div class="sidebar bg-danger">
            <Sidebar/>
        </div>
        <div class="content">
            <Profile/>
           <div class="row" style="margin-left:25px;">
           <h1><b>Account Management</b></h1>
           </div>

           <div class="row">

            <div class="table">
             <div class="search" style="margin-right:7rem">
                <input type="text" placeholder="Search">
                <button class="btn btn-info">
                  Add User
                </button>
             </div>
             <div class="table">
                <table class="table table-borderless table-hover">
                    <thead>
                        <tr >
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>DEPARTMENT</th>
                            <th>DATE CREATED</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="name text-center">
                                    <div class="">
                                        <img src="/public/icon/user-profile.svg" width="25px" alt="">
                                        <b>Fname M. Lname</b>
                                    </div>
                            </td>
                            <td>
                                email@email.com
                            </td>
                            <td>
                                Assembly
                            </td>
                            <td>
                                12/20/2025
                            </td>
                            <td class="action">
                             <button class="btn btn-info">Update</button>
                             <button class="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                        <tr>
                            <td class="name text-center">
                                    <div class="">
                                        <img src="/public/icon/user-profile.svg" width="25px" alt="">
                                        <b>Fname M. Lname</b>
                                    </div>
                            </td>
                            <td>
                                email@email.com
                            </td>
                            <td>
                                Assembly
                            </td>
                            <td>
                                12/20/2025
                            </td>
                            <td class="action">
                             <button class="btn btn-info">Update</button>
                             <button class="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                        <tr>
                            <td class="name text-center">
                                    <div class="">
                                        <img src="/public/icon/user-profile.svg" width="25px" alt="">
                                        <b>Fname M. Lname</b>
                                    </div>
                            </td>
                            <td>
                                email@email.com
                            </td>
                            <td>
                                Assembly
                            </td>
                            <td>
                                12/20/2025
                            </td>
                            <td class="action">
                             <button class="btn btn-info">Update</button>
                             <button class="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                        <tr>
                            <td class="name text-center">
                                    <div class="">
                                        <img src="/public/icon/user-profile.svg" width="25px" alt="">
                                        <b>Fname M. Lname</b>
                                    </div>
                            </td>
                            <td>
                                email@email.com
                            </td>
                            <td>
                                Assembly
                            </td>
                            <td>
                                12/20/2025
                            </td>
                            <td class="action">
                             <button class="btn btn-info">Update</button>
                             <button class="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                        <tr>
                            <td class="name text-center">
                                    <div class="">
                                        <img src="/public/icon/user-profile.svg" width="25px" alt="">
                                        <b>Fname M. Lname</b>
                                    </div>
                            </td>
                            <td>
                                email@email.com
                            </td>
                            <td>
                                Assembly
                            </td>
                            <td>
                                12/20/2025
                            </td>
                            <td class="action">
                             <button class="btn btn-info">Update</button>
                             <button class="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                        <tr>
                            <td class="name text-center">
                                    <div class="">
                                        <img src="/public/icon/user-profile.svg" width="25px" alt="">
                                        <b>Fname M. Lname</b>
                                    </div>
                            </td>
                            <td>
                                email@email.com
                            </td>
                            <td>
                                Assembly
                            </td>
                            <td>
                                12/20/2025
                            </td>
                            <td class="action">
                             <button class="btn btn-info">Update</button>
                             <button class="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                        <tr>
                            <td class="name text-center">
                                    <div class="">
                                        <img src="/public/icon/user-profile.svg" width="25px" alt="">
                                        <b>Fname M. Lname</b>
                                    </div>
                            </td>
                            <td>
                                email@email.com
                            </td>
                            <td>
                                Assembly
                            </td>
                            <td>
                                12/20/2025
                            </td>
                            <td class="action">
                             <button class="btn btn-info">Update</button>
                             <button class="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                    </tbody>
                </table>
             </div>
            </div>
           </div>
        </div>

      </div>

</template>

<script setup>
import Sidebar from '../partials/Sidebar.vue';
import Profile from '../partials/Header.vue'
</script>

<style scoped>
.inventory .content{
display: grid;
align-content: start;

}
.sidebar{
   width:fit-content;

}
.inventory{
    display: flex;
}
.inventory .content{
    width: 100%;
}
.inventory .search {
    display: flex;
    gap:25px;
    justify-content: end;

}
.inventory .search button{
    border-radius: 20px;
    background:#5ea8e7;
    font-weight: 500;
    color:White;


}
.inventory .search input{
    border-radius: 15px;
    border-width: 1px;
    border-color:rgb(189, 186, 186);
}
.inventory th,td{
    text-align: center;
}
.inventory table .name > div{
    display: flex;
    gap:10px;
    justify-content: center;
}
.inventory .action{
    display: flex;
    justify-content: center;
    gap:10px;
}
.inventory .action button{
    color:white;
    border-radius: 15px;
}


</style>
