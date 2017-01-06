<h1>vue效果结合</h1>
<input type="textarea" v-model="content" style="width: 200px;height:40px;overflow: hidden" >
<p>只能输入</p>
<p v-text="count"></p>
<p v-if="bool" style="color:red">你的输入马上就超了</p>
<p>{{number}}</p>
<p ref="today">today</p>
<p ref="yre">today</p>
<p ref="to">today</p>