//variables

var vm1 = new Vue ({
  el:'#app',
  data: {
    items: [
          {
            id: 1,
            title: 'черешня',
            price: 10.99,
			count: 1,
           },
          {
            id: 2,
            title: 'слива',
            price: 12.99,
            count: 1,
          },
		  {
              id: 3,
              title: 'белый виноград',
              price: 12.99,
			  count: 1,
            },
            {
                id: 4,
                title: 'абрикос',
                price: 22.99,
				count: 1,
              },
            {
                id: 5,
                title: 'персик',
                price: 88.99,
				count: 1,
              },
            {
                id: 6,
                title: 'розрвый виноград',
                price: 32.99,
				count: 1,
                },
            {
                id: 7,
                title: 'черный виноград',
                price: 45.99,
				count: 1,
                },
            {
                id: 8,
                title: 'клубника',
                price: 33.99,
				count: 1,
              }
          ],


          },

	methods: {
		addToCart(item) {
		  vm3.counter++;
		  vm2.isShow = true;
		  vm2.lists.push(item);

		}
	}

});
var vm2=new Vue({
	el: '#app2',
	data:{
		isShow: false,
	    lists: [],

	},
	methods: {
		removeInLists(list){
		  this.lists.splice(list,1);
          vm3.counter--;
		},
		increase(list){
			list.count++;
		},
		dicrease(list){
			if(list.count>0 ){
			list.count--;}
		},
		clearCart(){
			this.lists = [];
			vm3.counter = 0;
			},
		},
	computed: {
        total() {
            var total = 0;
			for (var i = 0; i < this.lists.length; i++) {
                    total += this.lists[i].price * this.lists[i].count;
            }
            return total;
        }
    },
});
var vm3=new Vue({
	el: '#app3',
	data:{
		counter:0,
	},

});
