// Statik Metodlar

class Matematik{
    static  cube(x){
        //statikler obje oluşturularak kullanılmaz.
        console.log(x*x*x);
    }
}

Matematik.cube(3);
//statikler prototipe yazılmazlar ve objeyle erişilemez.
