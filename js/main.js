let index = 0
let start = 0
let end
let counter = 0
let arraySms = []
let myArray = []
let textSlice = ""
var newText
var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dignissimos temporibus esse? Sequi, iste temporibus. Tempore mollitia accusantium aliquam aut, facilis quasi sint nemo itaque porro repudiandae ullam recusandae, unde non ex iste perferendis veritatis. Eveniet voluptatem iure magni ab rerum veniam repellendus. Dicta dolor, ea architecto quod, vel libero impedit repudiandae, tenetur aliquam cum placeat! Reprehenderit corrupti ad vitae suscipit obcaecati, distinctio aperiam eligendi placeat hic voluptatibus porro veniam, ipsam omnis recusandae consequuntur sed ratione deleniti non! Quisquam culpa at, eos earum sapiente quidem voluptatibus doloremque reiciendis perferendis fugiat? Itaque, reprehenderit iusto? Explicabo eligendi, iusto ex amet aut nulla."
const regex = / /gi;
newText = text.replace(regex, "$$")
// console.log(newText)
// console.log(newText.indexOf("$"))

myArray = newText.split("$")
console.log(myArray)

for (let length = 0; length < myArray.length; length++) {
    
    if ((newText.indexOf("$") != -1) && (index <= counter+100)) {
        end=index
        index = newText.indexOf("$", index)
        index++
        // console.log(index)
       
    
        } else {
            textSlice = text.slice(start, end)
            start = end
            arraySms.push(textSlice)
            console.log(textSlice)
            console.log(arraySms)
            counter= end
        }
}
    
// 0: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dignissimos temporibus esse? Sequi, "
// 1: "ste temporibus. Tempore mollitia accusantium aliquam aut, facilis quasi sint nemo itaque porro repudiandae "
// 2: "llam recusandae, unde non ex iste perferendis veritatis. Eveniet voluptatem iure magni ab rerum veniam "
// 3: "epellendus. Dicta dolor, ea architecto quod, vel libero impedit repudiandae, tenetur aliquam cum placeat! "
// 4: "eprehenderit corrupti ad vitae suscipit obcaecati, distinctio aperiam eligendi placeat hic voluptatibus "
// 5: "orro veniam, ipsam omnis recusandae consequuntur sed ratione deleniti non! Quisquam culpa at, eos earum "
// 6: "apiente quidem voluptatibus doloremque reiciendis perferendis fugiat? Itaque, reprehenderit iusto? Explicabo "

// 0: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dignissimos temporibus esse? "
// 1: "ste temporibus. Tempore mollitia accusantium aliquam aut, facilis quasi sint nemo itaque porro "
// 2: "llam recusandae, unde non ex iste perferendis veritatis. Eveniet voluptatem iure magni ab rerum "
// 3: "epellendus. Dicta dolor, ea architecto quod, vel libero impedit repudiandae, tenetur aliquam cum "
// 4: "eprehenderit corrupti ad vitae suscipit obcaecati, distinctio aperiam eligendi placeat hic "
// 5: "orro veniam, ipsam omnis recusandae consequuntur sed ratione deleniti non! Quisquam culpa at, eos "
// 6: "apiente quidem voluptatibus doloremque reiciendis perferendis fugiat? Itaque, reprehenderit iusto? "
// length: 7

// 0: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dignissimos temporibus esse? "
// 1: "iste temporibus. Tempore mollitia accusantium aliquam aut, facilis quasi sint nemo itaque porro "
// 2: "ullam recusandae, unde non ex iste perferendis veritatis. Eveniet voluptatem iure magni ab rerum "
// 3: "repellendus. Dicta dolor, ea architecto quod, vel libero impedit repudiandae, tenetur aliquam cum "
// 4: "Reprehenderit corrupti ad vitae suscipit obcaecati, distinctio aperiam eligendi placeat hic "
// 5: "porro veniam, ipsam omnis recusandae consequuntur sed ratione deleniti non! Quisquam culpa at, eos "
// 6: "sapiente quidem voluptatibus doloremque reiciendis perferendis fugiat? Itaque, reprehenderit iusto? "
// length: 7

// 0: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dignissimos temporibus esse? "
// 1: "Sequi, iste temporibus. Tempore mollitia accusantium aliquam aut, facilis quasi sint nemo itaque porro"
// 2: "repudiandae ullam recusandae, unde non ex iste perferendis veritatis. Eveniet voluptatem iure magni ab rerum "
// 3: "veniam repellendus. Dicta dolor, ea architecto quod, vel libero impedit repudiandae, tenetur aliquam cum "
// 4: "placeat! Reprehenderit corrupti ad vitae suscipit obcaecati, distinctio aperiam eligendi placeat hic "
// 5: "voluptatibus porro veniam, ipsam omnis recusandae consequuntur sed ratione deleniti non! Quisquam culpa at, eos "
// 6: "earum sapiente quidem voluptatibus doloremque reiciendis perferendis fugiat? Itaque, reprehenderit iusto? "

// 0: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dignissimos temporibus esse? "
// 1: "Sequi, iste temporibus. Tempore mollitia accusantium aliquam aut, facilis quasi sint nemo itaque "
// 2: "porro repudiandae ullam recusandae, unde non ex iste perferendis veritatis. Eveniet voluptatem iure "
// 3: "magni ab rerum veniam repellendus. Dicta dolor, ea architecto quod, vel libero impedit repudiandae, "
// 4: "tenetur aliquam cum placeat! Reprehenderit corrupti ad vitae suscipit obcaecati, distinctio aperiam "
// 5: "eligendi placeat hic voluptatibus porro veniam, ipsam omnis recusandae consequuntur sed ratione "
// 6: "deleniti non! Quisquam culpa at, eos earum sapiente quidem voluptatibus doloremque reiciendis "

// text1 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dignissimos temporibus esse?"
// console.log(text1.length)

// text2 = "Sequi, iste temporibus. Tempore mollitia accusantium aliquam aut, facilis quasi sint nemo itaque"
// console.log(text2.length)



