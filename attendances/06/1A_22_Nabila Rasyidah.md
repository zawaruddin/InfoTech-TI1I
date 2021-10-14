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

    Masukkan nilai ujian (0-100): 95


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println ("Nilai A, EXCELLENT!");
    }else if(nilai >= 80 && nilai <= 89){
        System.out.println ("Nilai B, Pertahankan prestasi Anda!");
    }else if(nilai >= 60 && nilai <= 79){
        System.out.println ("Nilai C, Tingkatkan prestasi Anda!");
    }else if(nilai >= 50 && nilai <= 59){
        System.out.println ("Nilai D, Tingkatkan belajar Anda!");
    }else {
         System.out.println ("Nilai E, Anda tidak lulus!");
    }     
}else {
    System.out.println ("Nilai yang Anda masukkan tidak valid!");
}

```

    Nilai A, EXCELLENT!


> Penjelasan kode program percobaan 1
pertama kita deklarasikan library scanner.
kemudian kita membuat kode program untuk menginputkan nilai yang akan digunakan dengan menggunakan tipe data int. selanjutnya kita membuat kode program untuk mengidentifikasi variabel yang kita masukkan tadi berada pada rentang mana. setelah itu kita buat juga kode program untuk menampilkan hasil dari variabel yang kita inputkan. penggunaan kode else if digunakan jika pernyataan tidak sesuai dengan sebelumnya. lalu kita buat juga kode program untuk menampilkan hasil apabila variabel yang kita input tidak termasuk dalam rentang 0-100. 

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
// Jawaban pertanyaan
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();

if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println ("Nilai A, EXCELLENT!");
    }else if(nilai >= 80 && nilai <= 89){
        System.out.println ("Nilai B, Pertahankan prestasi Anda!");
    }else if(nilai >= 60 && nilai <= 79){
        System.out.println ("Nilai C, Tingkatkan prestasi Anda!");
    }else if(nilai >= 50 && nilai <= 59){
        System.out.println ("Nilai D, Tingkatkan belajar Anda!");
    }else {
         System.out.println ("Nilai E, Anda tidak lulus!");
    }     
}else if (nilai < 0 ) {
    System.out.println ("Nilai yang Anda masukkan kurang dari 0");
}else  if (nilai > 100 ) {
    System.out.println ("Nilai yang Anda masukkan lebih dari 100");
}else{
}
```

    Masukkan nilai ujian (0-100): -100
    Nilai yang Anda masukkan kurang dari 0


### no. 2 
Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!
untuk memberikan keterangan range angka untuk variabel nilai


```Java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();

if(nilai >= 0 || nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println ("Nilai A, EXCELLENT!");
    }else if(nilai >= 80 && nilai <= 89){
        System.out.println ("Nilai B, Pertahankan prestasi Anda!");
    }else if(nilai >= 60 && nilai <= 79){
        System.out.println ("Nilai C, Tingkatkan prestasi Anda!");
    }else if(nilai >= 50 && nilai <= 59){
        System.out.println ("Nilai D, Tingkatkan belajar Anda!");
    }else {
         System.out.println ("Nilai E, Anda tidak lulus!");
    }     
}else if (nilai < 0 ) {
    System.out.println ("Nilai yang Anda masukkan kurang dari 0");
}else  if (nilai > 100 ) {
    System.out.println ("Nilai yang Anda masukkan lebih dari 100");
}else{
}

//karena menggunakan operator 0R, jika memenuhi salah satu kondisi maka program akan tetap berjalan. karena 105 lebih dari 0, 
//maka output yang dihasilkan berupa Nilai E
```

    Masukkan nilai ujian (0-100): 105
    Nilai E, Anda tidak lulus!


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

    Masukkan kategori: pekerja
    Masukkan besarnya penghasilan: 4000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equalsIgnoreCase ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
    
} else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    }else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
}else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Gaji bersih yang Anda terima: 3200000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2
pertama kita deklarasikan library Scanner. kemudian menuliskan input dengan tiga tipe data berbeda, yaitu string, int, dan double. kemudian menuliskan kode program yang nantinya akan diisi input data. setelah itu membuat kode program berupa kondisi pemilihan. kondisi yang pertama adalah jika pekerja,  maka dilihat lagi  berapa penghasilannya untuk menentukan pajak yang didapat dan gaji bersih yang diterima. setelah itu jika kondisinya adalah pebisnis, maka kita lihat lagi berapa penghasilannya, setelah itu menentukan pajak dan gaji bersih pebisnis tersebut. jika kondisi yang diisi bukan pekerja atau pebisnis, maka output akan muncul kategori yang anda masukkan salah.

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?


```Java
// Jawaban pertanyaan no 1
import java.util.Scanner;
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
 
if(kategori.equalsIgnoreCase("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
    
} else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    }else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
}else {
    System.out.println("Kategori yang Anda masukkan salah!");
}

//angka dibelakang koma tidak ditampilkan karena tipe data yang digunakan adalah int
```

    Masukkan kategori: pekerja
    Masukkan besarnya penghasilan: 2048485
    Gaji bersih yang Anda terima: 1741212


#### no 2
Jelaskan fungsi dari (int) pada sintaks: gajiBersih = (int) (penghasilan - (penghasilan * pajak));
fungsi nya adalah untuk mengetahui tipe data apa yang digunakan, untuk case diatas berarti menggunakan tipe data int

#### no 3
kegunaan equalsIgnoreCase adalah untuk menentukan apakah data yang diinputkan sama dengan nilai

#### no 4
kegunaan dari equals adalah untuk menentukan apakah data yang diinputkan sama persis dengan nilai. perbedaannya dengan equalsIgnoreCase adalah data yang dimasukkan untuk equals harus sama persis, namun jika menggunakan equalsIgnoreCase apabila ada perbedaan besar kecil huruf walaupun data sama maka program akan tetap berjalan.


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
System.out.print("Masukkan operator (+ - * /): ");
operator = input.next().charAt(0);
System.out.print("Masukkan bilangan kedua: ");
bil2 = input.nextDouble();

switch (operator){
    case '+':
    hasil = bil1 + bil2;
    System.out.println(bil1 + "+" + bil2 + " = " + hasil);
    break;
    case '-':
    hasil = bil1 - bil2;
    System.out.println(bil1 + "-" + bil2 + " = " + hasil);
    break;
    case '*':
    hasil = bil1 * bil2;
    System.out.println(bil1 + "*" + bil2 + " = " + hasil);
    break;
    case '/':
    hasil = bil1 / bil2;
    System.out.println(bil1 + "/" + bil2 + " = " + hasil);
    break;
    default:
        System.out.println("Operator yang Anda masukkan salah");
}
```

    Masukkan bilangan pertama: 11
    Masukkan operator (+ - * /): +
    Masukkan bilangan kedua: 13
    11.0+13.0 = 24.0


2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int sisi1, sisi2, sisi3;

System.out.print("Masukkan sisi pertama: ");
sisi1 = input.nextInt();
System.out.print("Masukkan sisi kedua: ");
sisi2 = input.nextInt();
System.out.print("Masukkan sisi ketiga: ");
sisi3 = input.nextInt();

if (sisi1 == sisi2 && sisi2!=sisi3 && sisi1!=sisi3 || sisi2==sisi3 && sisi2!=sisi1 && sisi1!=sisi3 || 
    sisi1==sisi3 && sisi2!=sisi1 && sisi2!=sisi3) {
    System.out.println("Segitiga sama kaki");
}else if (sisi1==sisi2 || sisi1==sisi3 || sisi2==sisi3){
    System.out.println("Segitiga sama sisi");
}else {
    System.out.println("Segitiga sembarang");
}
```

    Masukkan sisi pertama: 22
    Masukkan sisi kedua: 14
    Masukkan sisi ketiga: 22
    Segitiga sama kaki


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
        Scanner sc = new Scanner (System.in);
        String nama;
       int harga, total, ekspres, biaya;

System.out.print("Masukkan nama makanan : ");
nama = sc.nextLine();
System.out.print("Masukkan harga makanan : ");
harga = sc.nextInt();
System.out.print("Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya) ? ");
ekspres = sc.nextInt();

if((ekspres == 0) || (ekspres == 1)){
    if((ekspres == 0) && (harga < 100000)){
        biaya = 20000;
    } else if((ekspres == 0) && (harga >= 100000)){
        biaya = 30000;
    } else if((ekspres == 1) && (harga < 100000)){
        biaya = 45000;
    } else if((ekspres == 1) && (harga >= 100000)){
        biaya = 55000;
    }
    total = harga + biaya;
} else {
    System.out.println(" !INPUT PENGIRIMAN SALAH! ");
}

System.out.println("\n");
System.out.println("STRUK PEMBELIAN");
System.out.println(nama+ "\t\t" + "Rp " + harga);
System.out.println("Biaya pengiriman\t" + "Rp " + biaya);
System.out.println("TOTAL\t\t\t" + "Rp " + total)
```

    Masukkan nama makanan : tuna salad
    Masukkan harga makanan : 115000
    Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya) ? 0
    
    
    STRUK PEMBELIAN
    tuna salad		Rp 115000
    Biaya pengiriman	Rp 30000
    TOTAL			Rp 145000


## 4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur, bekerja, sekolah, pendapatan, tanggungan, biayaHidup;
System.out.println("Masukkan Umur Anda: ");
umur =input.nextInt();

if(umur >=18 ){
    System.out.println("Masukkan status bekerja (0 = tidak, 1 = ya): ");
    bekerja = input.nextInt();
    if(bekerja == 1){
        System.out.print("Masukkan pendapatan perbulan : ");
        pendapatan = input.nextInt();
        System.out.print("Masukkan jumlah tanggungan : ");
        tanggungan = input.nextInt();
        biayaHidup = pendapatan/tanggungan;
        System.out.println("Biaya hidup Anda : " +biayaHidup);
        if(biayaHidup <= 300000 && bekerja == 1){
            System.out.println("Penduduk Miskin ");
        }else if(biayaHidup >= 300000){
            System.out.println("Bukan penduduk miskin");
        }else if(bekerja == 0){
            System.out.println("Penduduk miskin");
        }
    }else {
        System.out.print("Masukkan status sekolah (0 = tidak, 1 = ya): ");
        sekolah = input.nextInt();
        if (sekolah == 1){
            System.out.println("Bukan penduduk miskin");
        }else if (sekolah == 0){
            System.out.println("penduduk miskin");
        }       
    }
} 
```

    Masukkan Umur Anda: 
    18
    Masukkan status bekerja (0 = tidak, 1 = ya): 
    1
    Masukkan pendapatan perbulan : 4000000
    Masukkan jumlah tanggungan : 2
    Biaya hidup Anda : 2000000
    Bukan penduduk miskin

