<template>
	<el-container style="border: 1px solid #eee">
	  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
	    <el-menu :default-openeds="['1', '2', '3']">
	      <el-submenu index="1">
	        <template slot="title"><i class="el-icon-tickets"></i>订单管理</template>
	        <el-menu-item index="1-1">订单查询</el-menu-item>
	        <el-menu-item index="1-2">退款申请</el-menu-item>
	      </el-submenu>
	      <el-submenu index="2">
	        <template slot="title"><i class="el-icon-goods"></i>商品管理</template>
	        <el-menu-item index="2-1">发布新商品</el-menu-item>
	        <el-menu-item index="2-2">商品列表</el-menu-item>
	        <el-menu-item index="2-3">商品数据</el-menu-item>
	      </el-submenu>
	      <el-submenu index="3">
	        <template slot="title"><i class="el-icon-setting"></i>店铺管理</template>
	        <el-menu-item index="3-1">商家/店铺信息</el-menu-item>
	        <el-menu-item index="3-2">店铺装修</el-menu-item>
	      </el-submenu>
	    </el-menu>
	  </el-aside>
	  
	  <el-container>
<!-- 	    <el-header style="text-align: right; font-size: 12px">
	      <el-dropdown>
	        <i class="el-icon-setting" style="margin-right: 15px"></i>
	        <el-dropdown-menu slot="dropdown">
	          <el-dropdown-item>查看</el-dropdown-item>
	          <el-dropdown-item>新增</el-dropdown-item>
	          <el-dropdown-item>删除</el-dropdown-item>
	        </el-dropdown-menu>
	      </el-dropdown>
	      <span>王小虎</span>
	    </el-header> -->
	    
	    <nuxt />
	  </el-container>
	</el-container>
</template>
<script>
  export default {
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
