<template>
  <div class="hello">
    <div id="project" style="padding: 10px">
			  <div style="backgroundColor: rgba(0,0,0,0.5)">
					<a v-bind:href="link"><img v-bind:src="require(`../assets/${img}`)"/></a>
				</div>
				<p style="color: black, position: relative, display: flex, justifyItems: center, alignItems: center">{{title}}</p>
			</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private title!: string;
  @Prop() private link!: string;
  @Prop() private img!: string;
}
</script>
