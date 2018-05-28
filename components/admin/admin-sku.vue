<template>
	<el-select v-model="value" placeholder="请选择" filterable>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

 <el-checkbox 
   v-model="checked" 
   label="添加规格图片" 
   border 
   size="mini"
 />
  <br>

  <el-tag 
    class="tag"
    v-for="tag in tags"
    :key="tag.name"
    closable
    color="#fff"
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    {{tag.name}}
  </el-tag>

  <el-popover
    placement="top"
    width="160"
    v-model="visible2">
    <div style="text-align: right; margin: 0">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
      <el-button type="primary" size="mini" @click="addSku">确定</el-button>
    </div>
    <el-button size="mini" type="text" slot="reference">+添加</el-button>
  </el-popover> 
  <br>

  <img 
    v-if="checked"
    class="el-upload--picture-card" 
    src="https://imsproductionimg.yangkeduo.com/9157523b0f384450dda341d6cb2ae93a.png"  
    v-for="(tag, index) in tags" 
    :key="tag.name+index"
    @click="addSkuImg(index)"
  />

  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>

  <el-upload style="display: none;"
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture-card"
    accept="image/*"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <i class="el-icon-plus" ref='upload-inner-a'></i>
  </el-upload>
</template>
<script>
	
</script>
