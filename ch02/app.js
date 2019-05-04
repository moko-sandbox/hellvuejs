var items = [
  {
    id: 1000,
    name: '鉛筆',
    price: 300,
    quantity: 0,
  },
  {
    id: 1001,
    name: 'ノート',
    price: 400,
    quantity: 0,
  },
  {
    id: 1002,
    name: '消しゴム',
    price: 500,
    quantity: 0,
  },
]
const vm = new Vue({
  el: '#app',
  data: {
    message: 'こんにちは!',
    items: items
  },
  filters: {
    numberWithDelimiter: function(value) {
      if (!value) {
        return '0';
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  computed: {
    totalPrice: function() {
      return this.items.reduce(function(sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function() {
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function() {
      return this.totalPrice >= 1000
    },
    // v-bind:class は、属性値にオブジェクトを指定した場合に、値が真のプロパティをclass属性値として反映する
    errorMessageClass: function() {
      return {
        error: !this.canBuy
      }
    },
    errorMessageStyle: function() {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red'
      }
    }
    // 引数は取れない。参照するときはメソッドではなくプロパティ。 console.log(vm.totalPrice) で参照できるように、プロパティで公開されている。
    // また this は Vue インスタンス自身を指している。プロパティで定義されているから this.totalPrice のような気泡ができる。
    //priceWithCurrencyCode: function(value) {
    //	return this.totalPrice + value
    //}
  },
  methods: {
    doBuy: function() {
      alert(this.totalPriceWithTax + '円のお買い上げ!')
      this.items.forEach(function(item) {
        item.quantity = 0
      })
    }
  }
});
window.vm = vm // JSFiddleでコンソールからvmにアクセスするための対応
