// write code here
<script>
        const product1 = {
            name: 'Water',
            distributor: {
              name: 'Giraffe Water Company',
              address: {
                street: 'Phetchaburi',
                subdistrict: 'Thanonphetchaburi',
                district: 'Ratchathewi',
                province: 'Bangkok'
              }
            }
          };
          console.log(product1.distributor.address.province);
          
          const product2 = {};
          if (product2 && product2.distributor && product2.distributor.address) {
            console.log(product2.distributor.address.province);
          } else {
            console.log('province of product2 not found'); // หากไม่พบ province
          }
          
    </script>
