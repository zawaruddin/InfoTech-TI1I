## JOBSHEET 6

## PEMILIHAN 2

### Tujuan

Mahasiswa memahami tentang operator logika; Mahasiswa mampu menyelesaikan permasalahan dengan menggunakan sintaks pemilihan bersarang; Mahasiswa mampu membuat sebuah program Java yang memanfaatkan sintaks pemilihan bersarang


### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1

#### Waktu percobaan : 40 menit

1. Tambahkan library Scanner, deklarasi Scanner

2. Buatlah variabel nilai yang memiliki tipe data int untuk menampung data yang diinput melalui keyboard

    ![](images/03.png)


```Java
// Ketik kode di sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();
```

    Masukkan nilai ujian (0-100): 100


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 || nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    }else if (nilai >=80 && nilai <89){
        System.out.println("Nilai B, Pertahankan prestasi anda!");
    }else if (nilai >=60 && nilai <79){
        System.out.println("Nilai C, Tingkatkan prestasi anda!");
    }else if (nilai >=50 && nilai <59){
        System.out.println("Nilai D, Tingkatkan belajar anda");
    }else{
        System.out.println("Nilai E, Anda tidak lulus!");
    }
}else{
    if(nilai < 0){
        System.out.println("Nilai yang anda masukkan kurang dari 0!");
    }else if(nilai > 100){
        System.out.println("Nilai yang anda masukkan lebih dari 100!");
    }else{
        
    }
    //diubah untuk menjawab pertanyaan
}
```

    Nilai A, EXCELLENT!


> Penjelasan kode program percobaan 1

//Membuat library scanner dan deklarasi scanner
//Membuat dan mendeklarasikan variabel
import java.util.Scanner; 
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();

//memproses inputan
if(nilai >= 0 || nilai <= 100){ //nilai lebih besar atau sama denan 0 atau nilai kurang dari samadengan 100
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    }else if (nilai >=80 && nilai <89){
        System.out.println("Nilai B, Pertahankan prestasi anda!");
    }else if (nilai >=60 && nilai <79){
        System.out.println("Nilai C, Tingkatkan prestasi anda!");
    }else if (nilai >=50 && nilai <59){
        System.out.println("Nilai D, Tingkatkan belajar anda");
    }else{
        System.out.println("Nilai E, Anda tidak lulus!");
    }
}else{
    if(nilai < 0){//jika nilai kurang dari 0 maka akan diprint "Nilai yang anda masukkan kurang dari 0!"
        System.out.println("Nilai yang anda masukkan kurang dari 0!");
    }else if(nilai > 100){//jka nilai lebih dari seratus maka akan diprint "Nilai yang anda masukkan lebih dari 100!"
        System.out.println("Nilai yang anda masukkan lebih dari 100!");
    }else{
    }
}

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
// Jawaban pertanyaan
1. 
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();
// Ketik kode di sini
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    }else if (nilai >=80 && nilai <89){
        System.out.println("Nilai B, Pertahankan prestasi anda!");
    }else if (nilai >=60 && nilai <79){
        System.out.println("Nilai C, Tingkatkan prestasi anda!");
    }else if (nilai >=50 && nilai <59){
        System.out.println("Nilai D, Tingkatkan belajar anda");
    }else{
        System.out.println("Nilai E, Anda tidak lulus!");
    }
}else{
    if(nilai < 0){
        System.out.println("Nilai yang anda masukkan kurang dari 0!");
    }else if(nilai > 100){
        System.out.println("Nilai yang anda masukkan lebih dari 100!");
    }else{
        
    }
}

2. Fungsi sintaks if (nilai >= 0 && nilai <= 100) adalah menambahkan nilai lebih dari atau sama dengan 0 dan nilai kurang dari atau sama dengan 100

3. Hasilnya menjadi "Nilai E, Anda tidak lulus!", karena || jika (nilai >= 0) menghasilkan true, maka (nilai <= 100) tidak akan dievaluasi.
    Dengan demikian, nilai seluruh (nilai >= 0 || nilai <= 100) akan dianggap benar.
    Jika (nilai >= 0) false, maka (nilai <= 100) akan dievaluasi untuk menentukan nilai seluruh ekspresi.
```

#### Percobaan 2

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

![](images/02.png)

> Flowchart tersebut digunakan untuk menghitung gaji bersih seseorang setelah dipotong pajak sesuai dengan kategorinya (pekerja dan pebisnis) dan besarnya penghasilan. 

2. Tambahkan library Scanner dan deklarasi Scanner

3. Deklarasikan variabel kategori, penghasilan, gajiBersih, dan pajak

    ![](images/05.png)


```Java
// Ketik kode di sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
```

    Masukkan kategori: pebisnis
    Masukkan besarnya penghasilan: 2000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equals("pekerja")){
    if (penghasilan <= 2000000){
    pajak = 0.1;
    }else if(penghasilan <= 3000000){
        pajak = 0.15;
    }else{
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang anda terima: "+ gajiBersih);
    
}else if(kategori.equals("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    }else if(penghasilan <= 3500000){
        pajak = 0.2;
    }else{
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang anda terima: "+ gajiBersih);
}else{
    System.out.println("Kategori yang anda masukkan salah!");
}
```

    Gaji bersih yang anda terima: 1700000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2

//Membuat dan mendeklarasikan library scanner, variabel kategori
import java.util.Scanner;
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();


//memproses inputan
if(kategori.equals("pekerja")){
    if (penghasilan <= 2000000){
    pajak = 0.1;
    }else if(penghasilan <= 3000000){
        pajak = 0.15;
    }else{
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang anda terima: "+ gajiBersih);
    
}else if(kategori.equals("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    }else if(penghasilan <= 3500000){
        pajak = 0.2;
    }else{
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang anda terima: "+ gajiBersih);
}else{
    System.out.println("Kategori yang anda masukkan salah!");
}


##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?


```Java
// Jawaban pertanyaan
1. Karena tidak menggunakan variabel double
2. Agar dapat memasukkan "penghasilan"
3. hasil : 1700000, kegunaan dari equalsIgnoreCase adalah tidak memperlihatkan huruf besar ataupun kecil
4. kegunaan dari equals adalah tidak memperlihatkan huruf besar ataupun kecil
```

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program kalkulator sederhana menggunakan bahasa pemrograman Java. User akan menginputkan dua buah bilangan riil dan satu buah operator aritmatika (+, -, *, atau /), kemudian program akan mengoperasikan dua bilangan tersebut dengan operator yang sesuai. Petunjuk: gunakan pernyataan switch-case.
Contoh tampilan program:

```
Masukkan bilangan pertama: 2.5
Masukkan operator (+, -, *, /): *
Masukkan bilangan kedua: 4
2.5 * 4.0 = 10.0

```


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
double bil1, bil2, hasil;
char operator;

System.out.print("Masukkan bilangan pertama: ");
bil1 = input.nextDouble();
System.out.print("Inputkan Operator (+,-,*,/): ");
operator = input.next().charAt(0);
System.out.print("Masukkan bilangan kedua: ");
bil2 = input.nextDouble();

switch(operator){
    case '+':
    hasil = bil1 + bil2;
    System.out.println(bil1 + "+" + bil2 + "=" + hasil);
    break;
    case '-':
    hasil = bil1 - bil2;
    System.out.println(bil1 + "-" + bil2 + "=" + hasil);
    break;
    case '*':
    hasil = bil1 * bil2;
    System.out.println(bil1 + "*" + bil2 + "=" + hasil);
    break;
    case '/':
    hasil = bil1 / bil2;
    System.out.println(bil1 + "/" + bil2 + "=" + hasil);
    break;
        
    default:
    System.out.println("Maaf operator yang Anda masukkan salah!");
}
```

```java
//output
Masukkan bilangan pertama: 5.0
Inputkan Operator (+,-,*,/): -
Masukkan bilangan kedua: 1.4
5.0-1.4=3.6

Masukkan bilangan pertama: 2.0
Inputkan Operator (+,-,*,/): +
Masukkan bilangan kedua: 3.0
2.0+3.0=5.0
```



2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
int a, b, c;
System.out.print("Masukkan sisi A: ")
    a = sc.nextInt();
System.out.print("Masukkan sisi B: ")
    b = sc.nextInt();
System.out.print("Masukkan sisi C: ")
    c = sc.nextInt();

if(a == b && b!=c && a!=c || b==c && b!=a && a!=c || a==c && b!=a && b!=c){
    System.out.print("Segitiga sama kaki");
}else if(a == b || a == c || b == c){
    System.out.print ("Segitiga sama sisi");
}else{
    System.out.print("Segitiga sembarang")
}
```


```Java
//output
Masukan sisi A: 12
Masukan sisi B: 1
Masukan sisi C: 12
maka hasilnya : segitiga sama kaki

Masukan sisi A: 5
Masukan sisi B: 5
Masukan sisi C: 5
maka hasilnya : segitiga sama sisi

Masukan sisi A: 1
Masukan sisi B: 3
Masukan sisi C: 5
maka hasilnya : segitiga sembarang
```

3. Warung Padang Gembira meminta Anda membuat sebuah program untuk menerima pesanan dari internet. Program yang Anda buat meminta user untuk memasukkan nama makanan dan harga. Setelah itu, user ditawarkan untuk menggunakan pengiriman ekspres. Jika pengguna menolak, maka jenis pengiriman yang digunakan adalah pengiriman reguler. Biaya pengiriman reguler untuk harga makanan kurang dari Rp 100.000 adalah Rp 20.000, sedangkan untuk harga makanan sama dengan atau lebih dari Rp 100.000 biaya pengirimannya adalah Rp 30.000. Untuk jenis pengiriman ekspres, tambahkan biaya tambahan sebesar Rp 25.000 dari standar biaya pengiriman reguler. Tampilkan struk yang berisi nama makanan yang dibeli + harga, biaya pengiriman, dan total yang harus dibayar!
Contoh hasil output program:

```
Masukkan nama makanan: Tuna salad
Masukkan harga makanan: Rp 115000
Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 0

STRUK PEMBELIAN
Tuna salad        Rp 115000
Biaya pengiriman  Rp 30000
TOTAL             Rp 145000

```

```
Masukkan nama makanan: Beef bulgogi
Masukkan harga makanan: Rp 78000
Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 1

STRUK PEMBELIAN
Beef bulgogi      Rp 115000
Biaya pengiriman  Rp 45000
TOTAL             Rp 123000

```




```Java
//ketik kode program dan lampirkan hasilnya disini
        import java.util.Scanner;
        Scanner input = new Scanner(System.in);
        int harga, total, ekspres;
        String makanan;

        System.out.print("Masukkan nama makanan: ");
        makanan = input.nextLine();
        System.out.print("Masukkan harga makanan: Rp. ");
        harga = input.nextInt();
        System.out.print("Apakah Anda ingin pengiriman ekspres? (1=iya), (0=idak) ");
        ekspres = input.nextInt();

        if (ekspres == 1) {
            if (harga >= 100000) {
                System.out.println("STRUK PEMBELIAN");
                System.out.println(String.format("%s Rp %s", makanan, harga));
                System.out.println("Biaya Pengiriman: Rp.55.000 ");
                System.out.println("TOTAL " + (harga + 55000));
            } else if (harga <= 100000) {
                System.out.println("STRUK PEMBELIAN");
                System.out.println(String.format("%s Rp %s", makanan, harga));
                System.out.println("Biaya Pengiriman: Rp.45.000 ");
                System.out.println("TOTAL " + (harga + 45000));
            }
        } else if (ekspres == 0) {
            if (harga >= 100000) {
                System.out.println("STRUK PEMBELIAN");
                System.out.println(String.format("%s Rp %s", makanan, harga));
                System.out.println("Biaya Pengiriman: Rp.30.000 ");
                System.out.println("TOTAL " + (harga + 30000));
            } else if (harga <= 100000) {
                System.out.println("STRUK PEMBELIAN");
                System.out.println(String.format("%s Rp %s", makanan, harga));
                System.out.println("Biaya Pengiriman: Rp.20.000 ");
                System.out.println("TOTAL " + (harga + 20000));
            }
        }
```

```java
// output
Masukkan nama makanan: Terangbulan
Masukkan harga makanan: Rp. 10000
Apakah Anda ingin pengiriman ekspres? (1=iya), (0=idak) 0
STRUK PEMBELIAN
Terangbulan Rp 10000        
Biaya Pengiriman: Rp.20.000 
TOTAL 30000
```


4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
        import java.util.Scanner;
        Scanner input = new Scanner(System.in);

        int umur;
        String kerja;
        System.out.print("Masukkan Umur: ");
        umur=input.nextInt();

        if(umur>=18){

            int statusKerja;
            System.out.print("Apakah Anda memiliki pekerjaan (1=ya, 0=tidak)?");
            statusKerja=input.nextInt();

            if(statusKerja==1){
                int pendapatan, tanggungan;
                double biayaHidup;

                System.out.print("Masukkan pendapatperbulan Anda: Rp. ");
                pendapatan=input.nextInt();
                System.out.print("Masukkan berapa tanggungan anak anda:");
                tanggungan=input.nextInt();
                biayaHidup=pendapatan/tanggungan;

                if(biayaHidup<300000){
                    System.out.print("Anda termasuk penduduk miskin");
                }else{
                    System.out.print("Anda termasuk penduduk mampu");
                }

             }else if(statusKerja==0){
             System.out.print("Anda termasuk penduduk miskin");

             }else{
             System.out.print("Input yang anda masukkan tidak valid");
             }
    
        }else{
         int statusSekolah;
         System.out.print("Apakah Anda berada dalam proses pendidikan(1=ya, 0=tidak)?");
          statusSekolah=input.nextInt();
         if(statusSekolah==1){
             System.out.print("Anda termasuk penduduk mampu");
         }else if(statusSekolah==0){
                System.out.print("Anda termasuk penduduk miskin");   
         }else{
              System.out.print("Input yang anda masukkan tidak valid");
         }
}
```

```java
//output
Masukkan Umur: 19
Apakah Anda memiliki pekerjaan (1=ya, 0=tidak)?1
Masukkan pendapatperbulan Anda: Rp. 10000000
Masukkan berapa tanggungan anak anda:1000000
Anda termasuk penduduk miskin
```
