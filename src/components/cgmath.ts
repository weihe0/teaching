export class HomoVector2{

    private array: number[] = [0,0,1];
    constructor(x:number,y:number) {
        this.array[0]=x;
        this.array[1]=y;
    }
    get x(): number {
        return this.array[0];
    }

    set x(x: number) {
        this.array[0]=x;
    }
    get y():number{
        return this.array[1];
    }
    set y(y:number){
        this.array[1]=y;
    }
    transform(mat:Matrix3):HomoVector2{
        let result_array=[0,0,0];
        for(let i =0;i<3;i++){
            for(let j=0;j<3;j++){
                result_array[i]+=mat.array[i][j]*this.array[j];
            }
        }
        this.array=result_array;
        return this;
    }
    rotate(angle:number):HomoVector2{
        const cos=Math.cos(angle);
        const sin=Math.sin(angle);
        const rotation_array=[
            [cos, -sin, 0],
            [sin, cos, 0],
            [0,0,1]
        ];
        return this.transform(new Matrix3(rotation_array));
    }
    shift(offset:HomoVector2):HomoVector2{
        this.x=offset.x;
        this.y=offset.y;
        return this;
    }
    scale(factor:number):HomoVector2{
        this.array[0]*=factor;
        this.array[1]*=factor;
        return this;
    }
    scaleXY(factor_x:number, factor_y:number):HomoVector2{
        this.array[0]*=factor_x;
        this.array[1]*=factor_y;
        return this;
    }

    clone():HomoVector2{
        return new HomoVector2(this.x, this.y);
    }
}

export class Matrix3{
    public array: number[][] =[[0,0,0],[0,0,0],[0,0,0]];
    public constructor(m:number[][]) {
        if (this.array.length==m.length){
            this.array=m;
        }
    }
}
