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
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
nilai = input.nextInt();
```

    100


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){System.out.println("Nilai A, EXCELLENT");}
        else if (nilai >= 80 && nilai <= 89){System.out.println("NILAI B, Pertahankan Prestasi Anda!");}
        else if (nilai >= 70 && nilai <= 79){System.out.println("NILAI C, Tingkatkan Prestasi Anda!");}
        else if (nilai >= 60 && nilai <= 69){System.out.println("NILAI D, Tingkatkan Belajar Anda!");}
        else if (nilai >= 50 && nilai <= 59){System.out.println("NILAI E, Anda tidak lulus!");}
        else { System.out.println("NILAI Yang Anda Masukkan tidak valid!");}
        }
```

    Nilai A, EXCELLENT


> Penjelasan kode program percobaan 1

>Kode program diatas untuk mengkonversikan nilai dari angka ke huruf dan untuk pengecekan nilai dengan sistem if else , Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
//No.01
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
nilai = input.nextInt();
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){System.out.println("Nilai A, EXCELLENT");}
        else if (nilai >= 80 && nilai <= 89){System.out.println("NILAI B, Pertahankan Prestasi Anda!");}
        else if (nilai >= 70 && nilai <= 79){System.out.println("NILAI C, Tingkatkan Prestasi Anda!");}
        else if (nilai >= 60 && nilai <= 69){System.out.println("NILAI D, Tingkatkan Belajar Anda!");}
        else if (nilai >= 50 && nilai <= 59){System.out.println("NILAI E, Anda tidak lulus!");}
        else { System.out.println("NILAI Yang Anda Masukkan tidak valid!");}
}else {
    if(nilai < 0){System.out.println("Nilai yang Anda masukkan kurang dari 0");}
    else if(nilai > 100){System.out.println("Nilai yang Anda masukkan lebih dari 100");}
}
```

    120
    Nilai yang Anda masukkan lebih dari 100


>Penjelasan No.01

>Kode program diatas untuk mengkonversikan nilai dari angka ke huruf dan untuk pengecekan nilai dengan sistem if else , Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.  jika nilai yang dimasukkan kurang dari 0 maka ditampilkan informasi bahwa nilai yang anda masukkan kurang dari 0, dan  jika nilai yang dimasukkan lebih dari 100 maka ditampilkan informasi bahwa nilai yang anda masukkan  lebih dari 100.

### No.02
Kegunaan sintaks if (nilai >= 0 && nilai <= 100) adalah untuk membuat program pemilihan bersarang yang jika angka yang dimasukkan diluar range yang ada di sintaks tersebut maka program pemilihan tidak berjalan.


```Java
//No.03
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
nilai = input.nextInt();
if(nilai >= 0 || nilai <= 100){
    if(nilai >= 90 || nilai <= 100){System.out.println("Nilai A, EXCELLENT");}
        else if (nilai >= 80 || nilai <= 89){System.out.println("NILAI B, Pertahankan Prestasi Anda!");}
        else if (nilai >= 70 || nilai <= 79){System.out.println("NILAI C, Tingkatkan Prestasi Anda!");}
        else if (nilai >= 60 || nilai <= 69){System.out.println("NILAI D, Tingkatkan Belajar Anda!");}
        else if (nilai >= 50 || nilai <= 59){System.out.println("NILAI E, Anda tidak lulus!");}
        else { System.out.println("NILAI Yang Anda Masukkan tidak valid!");}
}else {
    if(nilai < 0){System.out.println("Nilai yang Anda masukkan kurang dari 0");}
    else if(nilai > 100){System.out.println("Nilai yang Anda masukkan lebih dari 100");}
}
```

    105
    Nilai A, EXCELLENT


>Penjelasan No.03

>Yang terjadi adalah berapapun angka yang dimasukkan akan muncul 'Nilai A, EXCELLENT' karena operator && diganti || maka yang terjadi komputer menjalankan program pemilihan bersarang kondisi pertama karena semua angka masuk range tersebut yaitu lebih dari 0 atau kurang dari 100.

#### Percobaan 2

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

![](images/02.png)

> Flowchart tersebut digunakan untuk menghitung gaji bersih seseorang setelah dipotong pajak sesuai dengan kategorinya (pekerja dan pebisnis) dan besarnya penghasilan. 

2. Tambahkan library Scanner dan deklarasi Scanner

3. Deklarasikan variabel kategori, penghasilan, gajiBersih, dan pajak

    ![](images/05.png)


```Java
import java.util.Scanner;
Scanner input = new Scanner (System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
```

    Masukkan kategori: PEBISNIS
    Masukkan besarnya penghasilan: 10000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
if(kategori.equalsIgnoreCase ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima:" + gajiBersih);

} else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Gaji bersih yang Anda terima: 7500000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2

> program diatas untuk menghitung gaji bersih dari seseorang, jika dia seorang pekerja yang gajinya kurang dari 2 juta maka gajinya dikurangi 10% dari gajinya, jika dia seorang pekerja yang gajinya kurang dari 3 juta maka gajinya dikurangi 15% dari gajinya,program diatas untuk menghitung gaji bersih dari seseorang, jika dia seorang pekerja yang gajinya kurang dari 2 juta maka gajinya dikurangi 10% dari gajinya, jika dia seorang pekerja yang gajinya kurang dari 3 juta maka gajinya dikurangi 15% dari gajinya, jika dia seorang pebisnis yang gajinya kurang dari 2,5 juta maka gajinya dikurangi 15% dari gajinya, jika dia seorang pebisnis yang gajinya kurang dari 3,5 juta maka gajinya dikurangi 20% dari gajinya,jika dia seorang pebisnis yang gajinya lebih dari 3,5 juta maka gajinya dikurangi 25% dari gajinya

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?


```Java
// NO.01
import java.util.Scanner;
Scanner input = new Scanner (System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
if(kategori.equalsIgnoreCase ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima:" + gajiBersih);

} else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Masukkan kategori: pekerja
    Masukkan besarnya penghasilan: 2048485
    Gaji bersih yang Anda terima:1741212


>1. Karena variabel gaji bersih termasuk tipe data int yang hanya menampung bilangan bulat tidak dapat menampung bilangan desimal. 

>2. fungsi dari sintaks tersebut adalah untuk mengkonversi variabel pajak menjadi bilangan bulat karena program dapat berjalan jika semua tipe data sama.


```Java
// No.03
import java.util.Scanner;
Scanner input = new Scanner (System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
if(kategori.equalsIgnoreCase ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima:" + gajiBersih);

} else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Masukkan kategori: pebisnis
    Masukkan besarnya penghasilan: 200000000
    Gaji bersih yang Anda terima: 150000000


>3. fungsi equalsIgnoreCase adalah program tidak akan melihat perbandingan dari segi hurufnya, besar ataupun kecil, yang terpenting nilai yang diinputkan user, sama dengan nilai yang sebenarnya.


```Java
// No.04
import java.util.Scanner;
Scanner input = new Scanner (System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;

System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();
if(kategori.equals ("pekerja")){
    if (penghasilan <= 2000000){
        pajak = 0.1;
    } else if (penghasilan <= 3000000){
        pajak = 0.15;
    } else {
        pajak = 0.2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima:" + gajiBersih);

} else if (kategori.equals ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Masukkan kategori: pebisnis
    Masukkan besarnya penghasilan: 200000000
    Gaji bersih yang Anda terima: 150000000


> 4.  fungsi equals, variabel yang dimasukkan dibagian deklarasi harus sama dengan yang dimasukkan di inputan, meliputi huruf besar dan kecilnya, jika tidak sama maka program akan mengecek ke pemilihan selanjutnya.

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
import java.util.Scanner;
Scanner input = new Scanner (System.in);
float first, second, third;
char operator;

System.out.println("Masukkan Bilangan Pertama : ");
first = input.nextFloat();
System.out.println("Masukkan Bilangan Kedua : ");
second = input.nextFloat();
System.out.println("Masukkan Operator aritmatika : ");
operator = input.next().charAt(0);


switch (operator){
    case '+' :
    System.out.println("Hasilnya Adalah = " + (first + second));
    break;
    case '-' :
    System.out.println("Hasilnya Adalah = " + (first - second));
    break;
    case '*' :
    System.out.println("Hasilnya Adalah = " + (first * second));
    break;
    case '/' :
    System.out.println("Hasilnya Adalah = " + (first / second));
    break;
    
    default:
    System.out.println("Anda Salah Memasukkan Data Operator");
}
```

    Masukkan Bilangan Pertama : 
    12
    Masukkan Bilangan Kedua : 
    12
    Masukkan Operator aritmatika : 
    *
    Hasilnya Adalah = 144.0


2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
import java.util.Scanner;
Scanner input = new Scanner (System.in);
int satu, dua, tiga;
String hasil;

System.out.println("Masukkan sisi Pertama : ");
satu = input.nextInt();
System.out.println("Masukkan sisi Kedua : ");
dua = input.nextInt();
System.out.println("Masukkan sisi Ketiga : ");
tiga = input.nextInt();

if(satu == dua && satu == tiga){
    System.out.println("Termasuk segitiga sama sisi");
    } else if(satu == dua || satu == tiga || dua == tiga){
     System.out.println("Termasuk segitiga sama kaki");
 }else {
    System.out.println("Termasuk Segitiga sembarang");
}

```

    Masukkan sisi Pertama : 
    12
    Masukkan sisi Kedua : 
    2
    Masukkan sisi Ketiga : 
    12
    Termasuk segitiga sama kaki


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
import java.util.Scanner;
Scanner input = new Scanner (System.in);
String makanan;
int ekspres;
long harga, biayakirim, total;

System.out.print("Masukkan Nama Makanan  : ");
makanan = input.nextLine();
System.out.print("Masukkan harga makanan : Rp ");
harga = input.nextLong();
System.out.print("Apakah anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? : ");
ekspres = input.nextInt();
System.out.println(" ");
if (ekspres == 0 ){
    if(harga < 100000){
    System.out.println("STRUK PEMBELIAN ");
    System.out.println(String.format("%s              Rp %s", makanan,harga));
    System.out.println("Biaya Pengiriman  Rp 20000");
    System.out.println(String.format("TOTAL             Rp %s",(harga + 20000) ));
    }else if(harga >= 100000){
    System.out.println("STRUK PEMBELIAN ");
    System.out.println(String.format("%s              Rp %s", makanan,harga));
    System.out.println("Biaya Pengiriman  Rp 30000");
    System.out.println(String.format("TOTAL             Rp %s",(harga + 30000) ));
    }
}else if (ekspres == 1);
    if(harga < 100000){
    System.out.println("STRUK PEMBELIAN ");
    System.out.println(String.format("%s              Rp %s", makanan,harga));
    System.out.println("Biaya Pengiriman  Rp 45000");
    System.out.println(String.format("TOTAL             Rp %s",(harga + 45000) ));
    }else if(harga >= 100000){
    System.out.println("STRUK PEMBELIAN ");
    System.out.println(String.format("%s               Rp %s", makanan,harga));
    System.out.println("Biaya Pengiriman   Rp 55000");
    System.out.println(String.format("TOTAL              Rp %s",(harga + 55000) ));
    }
```

    Masukkan Nama Makanan  : SOTO
    Masukkan harga makanan : Rp 120000
    Apakah anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? : 1
     
    STRUK PEMBELIAN 
    SOTO               Rp 120000
    Biaya Pengiriman   Rp 55000
    TOTAL              Rp 175000


4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
import java.util.Scanner;
Scanner input = new Scanner (System.in);
long pendapatan;
int umur, status, tanggungan, sekolah;
long pendapatan, biaya;

System.out.print("Masukkan umur : ");
umur = input.nextInt();

if (umur >= 18 ){
    System.out.print("Masukkan status kerja(0 = tidak, 1 = ya)? : ");
    status = input.nextInt();
    if(status == 0){
    System.out.print("Penduduk Miskin ");
    }if(status == 1){
     System.out.print("Masukkan pendapatan perbulan : Rp");
     pendapatan = input.nextLong();
     System.out.print("Masukkan jumlah tanggungan   : ");
     tanggungan = input.nextInt();
     biaya = (pendapatan/tanggungan);
     System.out.println("Biaya hidup : " + biaya);
        if(biaya < 300000){
             System.out.println("Penduduk Miskin ");
       }if(biaya > 3000000) {
             System.out.println("Penduduk Bukan Miskin ");
         }
     }else {
        System.out.println("Anda salah Menginput data");
    }
}else if (umur <18){
    System.out.print("Masih Sekolah (0 = tidak, 1 = ya)? : ");
   sekolah = input.nextInt();
    if(sekolah == 0){
    System.out.print("Penduduk Miskin ");
    }if(sekolah == 1){
    System.out.print("Penduduk Bukan Miskin ");
    }
    else {
     System.out.println("Anda salah Menginput data");
    }
    
}
```

    Masukkan umur : 19
    Masukkan status kerja(0 = tidak, 1 = ya)? : 1
    Masukkan pendapatan perbulan : Rp100000000
    Masukkan jumlah tanggungan   : 3
    Biaya hidup : 33333333
    Penduduk Bukan Miskin 



