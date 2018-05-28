tree = [{
        k: '颜色', 
        v: [{id: '0', name: '红色', imgUrl: 'https'}
          ,{id: '1',name: '蓝色',imgUrl: 'http'}],
        k_s: 's1'
      },{
        k: '尺寸',
        v: [{id: '10',name: 'S码',}
          ,{id: '11',name: 'M码'}],
        k_s: 's2'
      }]

let list = []
let obj = {}
let s1Len = tree[0].v.length
let s2Len = tree[1].v.length
for(let i = 0; i < s1Len; i++ ) {
  for(let j = 0; j < s2Len; j++ ) {
    list.push({
      s1:tree[0].v[i].id,
      s2:tree[1].v[j].id
    })
  }
}
console.log(s1Len, s2Len)
console.log(list)
// this.formatTree(this.value, this.tags, 's1')
// this.formatTree(this.value2, this.tags2, 's2')     
// this.formatList(this.skus.tree) 
