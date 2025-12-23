    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d")
    const input_icon = document.getElementById("icon_input")
    let binary_output = document.getElementById("binary_output")
    const encode = document.getElementById("encode")
    const decode = document.getElementById("decode")
    let SIZE = 0
    // canvas.width = SIZE;
    // canvas.height = SIZE;
    
    input_icon.addEventListener("change", (e)=>{
        const image_icon = new Image()
        image_icon.onload = ()=>{
            SIZE = image_icon.width
            canvas.width = image_icon.width;
            canvas.height = image_icon.height;
            ctx.fillStyle = "white"
            ctx.clearRect(0, 0, SIZE, SIZE)
            ctx.drawImage(image_icon, 0, 0, SIZE, SIZE) 
        }
        image_icon.src = URL.createObjectURL(e.target.files[0])
    })
    encode.addEventListener("click", ()=>{
        const data  = ctx.getImageData(0, 0, SIZE, SIZE).data
        
        // console.log(data)
        const Binary = []
        for(let y=0; y<SIZE; y++){
            let row = []
            for(let x =0; x<SIZE; x++){
                const i = (y * SIZE + x) * 4;
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const alpha = data[i+3]
                if(alpha<50){
                     row.push([0,0,0,0]);
                }else{
                row.push([r,g,b,alpha])
                }

            }
            Binary.push(row)
        }
        console.log(Binary);
        binary_output.value = JSON.stringify(Binary)
    })
    decode.addEventListener("click", ()=>{
        const binary = JSON.parse(binary_output.value)
        const SIZE = binary.length

        // console.log(binary)
        canvas.width = SIZE
        canvas.height =SIZE
        const image = ctx.createImageData(SIZE, SIZE)
        for(let y=0; y<SIZE; y++){
            for(let x=0; x<SIZE; x++){
                const i = (y*SIZE+x)*4
                const [r, g, b, alpha] = binary[y][x] 
                image.data[i] = r
                image.data[i+1] = g
                image.data[i+2] = b
                image.data[i+3] = alpha
            }
        }
        ctx.putImageData(image,0,0) 
    
    })