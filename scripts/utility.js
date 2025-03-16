

const page_1 = document.getElementById('next_page').addEventListener('click', function(){
    const page_1 = document.getElementById('first_page');
    page_1.classList.add('hidden');
    const page_2 = document.getElementById('2nd_page');
    page_2.classList.remove('hidden');
})


const page_2 = document.getElementById('1st_page').addEventListener('click', function(){
    const page_2 = document.getElementById('2nd_page');
    page_2.classList.add('hidden');
    const page_1 = document.getElementById('first_page');
    page_1.classList.remove('hidden');
})

const next = document.getElementById('next_btn').addEventListener('click', function(){
    const page_2 = document.getElementById('2nd_page');
    page_2.classList.add('hidden');
    const page_3 = document.getElementById('last_section');
    page_3.classList.remove('hidden');
})


const page_3 = document.getElementById('last_page').addEventListener('click', function(){
    const page_1 = document.getElementById('first_page');
    page_1.classList.remove('hidden');
    const page_3 = document.getElementById('last_section');
    page_3.classList.add('hidden');
})




document.addEventListener("DOMContentLoaded", function () {
    const seatButtons = document.querySelectorAll(".btn_1");

    seatButtons.forEach(button => {
        button.addEventListener("click", function () {
            const seat_n = this.innerText;
            const get_value = document.getElementById('select_seat')

            if (!this.classList.contains("bg-green-500")) {
 
                this.classList.add("bg-green-500", "text-white");

                const in_html = document.createElement('div');
                in_html.classList.add("seat-entry"); 
                in_html.setAttribute("data-seat", seat_n); 

                in_html.innerHTML = `
                    <div class="grid grid-cols-3 gap-10">
                        <div class="mr-[50px]">s${seat_n}</div>
                        <div class="ml-[90px]">economy</div>
                        <div class="ml-[200px]">550</div>
                    </div>
                `;

                get_value.appendChild(in_html);



                const seat_con = document.getElementById('seat_count');
                const par_int = parseInt(seat_con.innerText);
                
                const new_seat = par_int - 1; 

                
                seat_con.innerText = new_seat;  
                               
  
                
                const price_in = document.getElementById('price_list');
                const price_value =price_in.innerText;
                const price_value_int = parseInt(price_value)
                price_in.innerText = price_value_int+550;

                document.getElementById('coupon_btn').addEventListener('click', function(){
                    const coupon = document.getElementById('cupon_code');
                    const coupon_val = coupon.value;
                    
                    if(coupon_val === 'NEW15' ){
                        const real_tk = price_in.innerText;
                        const discount = real_tk * 0.15
                        const now_tk = real_tk- discount;
                        const dis = document.getElementById("dis_after")
                        dis.innerText = now_tk
                    
                    }
                    else if(coupon_val === 'couple20' ){
                        const real_tk = price_in.innerText;
                        const discount = real_tk * 0.20
                        const now_tk = real_tk- discount;
                        
                        const dis = document.getElementById("dis_after")
                        dis.innerText = now_tk
                        
                    }
                })
                
            } else {
               
                this.classList.remove("bg-green-500", "text-white");

                
                const seatEntry = get_value.querySelector(`[data-seat='${seat_n}']`);
                if (seatEntry) {
                    seatEntry.remove();
                }
                const price_in = document.getElementById('price_list');
                const price_value =price_in.innerText;
                const price_value_int = parseInt(price_value)
                price_in.innerText = price_value_int-550;

                

                const seat_con = document.getElementById('seat_count');
                const par_int = parseInt(seat_con.innerText);
                
                const new_seat = par_int + 1; 

                
                seat_con.innerText = new_seat;  



            }
        });
    });
});









