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

    Masukkan nilai ujian (0-100): 105


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 || nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if(nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if(nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if(nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} 
else if (nilai < 0){
    System.out.println("Nilai yang Anda masukkan kurang dari 0");
} else if (nilai > 100){
    System.out.println("Nilai yang Anda masukkan lebih dari 100");
}
else {
}
```

    Nilai E, Anda tidak lulus!


> Penjelasan kode program percobaan 1
Tipe data int adalah tibe data yang digunakan untuk menampung bilangan bulat. 
If digunakan untuk menentukan kebenaran kondisi yang pertama. jika pada kondisi pertama bernilai false maka akan dialihkan pada else if dan akan dieksekusi kebenarannya, jika masih false, maka akan dilakukan pengecekan pada else if yang kedua dan seterusnya sampai else. Kondisi yang seperti ini adalah pengecekkan bersarang.

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?

### // Jawaban pertanyaan
1. Tambahkan else if (nilai < 0){ System.out.println("Nilai yang Anda masukkan kurang dari 0"); } else if (nilai > 100){ System.out.println("Nilai yang Anda masukkan lebih dari 100"); } 
dibawah 
else {
System.out.println("Nilai E, Anda tidak lulus!"); } 
Maka output yang dihasilkan akan sesuai dengan yang dimau.

2. Menjelaskan fungsi nilai yang dimasukkan mulai dari lebih besar sama dengan 0 dan lebih kecil sama dengan 100.

3. Nilai akan berubah menjadi E, karena || adalah OR yang berarti tidak menunjukkan rentang nilai.

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

    Masukkan kategori: Pebisnis
    Masukkan besarnya penghasilan: 2000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equals ("pekerja")){
if (penghasilan <= 2000000){
    pajak = 0.1;
} else if (penghasilan <= 3000000){
    pajak = 0.15;
} else {
    pajak = 0.2;
}
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
System.out.println("Gaji bersih yang Anda terima : " + gajiBersih);

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

    Kategori yang Anda masukkan salah!


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2
Percobaan 2 disajikan beberapa kategori
Pada setiap kategori menggunakan "equalsIgnoreCase". Dengan menggunakan fungsi equalsIgnoreCase(), tidak akan melihat perbandingan dari segi hurufnya, besar ataupun kecil, yang terpenting nilai yang diinputkan user, sama dengan nilai yang sebenarnya. Sebaliknya jika equalsIgnoreCase diganti dengan equals maka semua karakter dari kedua variable tersebut harus sama, meliputi huruf besar dan kecilnya, pada fungsi equals(), saat kita menginputkan data, tetapi ada salah satu atau beberpa huruf dengan ukuran berbeda, maka akan bernilai false.
Kategori pekerja (if) yang penghasilannya kurang dari sama dengan 2000000 maka akan dikenakan pajak sebesar 0,1. sedangkan yang penghasilannya kurang dari sama dengan 3000000 akan dikenakan pajak sebesar 0,15. dan selain itu akan dikenakan pajak sebesar 0,2. dan akan di perhitungkan dengan (penghasilan - (penghasilan * pajak)) untuk total gaji bersih.
dan pada Kategori pebisnis (else if) jika berpenghasilan kurang dari sama dengan 2500000 maka akan dikenakan pajak 0,15, yang berpenghasilan kurang dari sama dengan 3500000 dikenakan pajak sebesar 0,2. selain itu akan dikenakan pajak 0,25. dan akan di perhitungkan dengan (penghasilan - (penghasilan * pajak)) untuk total gaji bersih.
Sedangkan selain kategori Pekerja (if) dan Pebisnis (else if) maka Kategori salah (else).

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

### // Jawaban pertanyaan
1. Yang terjadi adalah penghasilan sudah ditampilkan hasil total ( (penghasilan-(penghasilan * pajak)) ) dan angka bibelakang koma tidak ditampilkan karena menggunakan tipe data integer yang digunakan untuk bilangan bulat. 

2. Fungsi (int) mengembalikan objek integer dari bilangan yang menjadi argumennya.

3. Yang terjadi ketika menggunakan kategori dan penghasilan tersebut ditampilkan output dengan hasil total ( (penghasilan - (penghasilan * pajak)) ). Dengan menggunakan fungsi equalsIgnoreCase(), tidak akan melihat perbandingan dari segi hurufnya, besar ataupun kecil, yang terpenting nilai yang diinputkan user, sama dengan nilai yang sebenarnya. 

4. Jika menggunakan fungsi equals(), dan pada kategori "Pebisnis" huruf P menggunakan kapital maka akan keluar output kategori yang Anda masukkan salah. semua karakter dari kedua variable tersebut harus sama, meliputi huruf besar dan kecilnya, pada fungsi equals(), saat kita menginputkan data, tetapi ada salah satu atau beberpa huruf dengan ukuran berbeda, maka akan bernilai false.

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
float bilangan1; 
double bilangan2, hasil;
char operator;

System.out.print("Masukkan bilangan pertama : ");
bilangan1 = input.nextFloat();
System.out.print("Masukkan operator (+ - * /): ");
operator = input.next().charAt(0);
System.out.print("Masukkan bilangan kedua : ");
bilangan2 = input.nextDouble();


switch(operator) {
  case '+':
     hasil = bilangan1 + bilangan2;
        System.out.println(bilangan1 + "+" + bilangan2 + "=" + hasil);
    break;
  case '-':
     hasil = bilangan1 - bilangan2;
        System.out.println(bilangan1 + "-" + bilangan2 + "=" + hasil);
    break;
  case '*':
     hasil = bilangan1 * bilangan2;
        System.out.println(bilangan1 + "*" + bilangan2 + "=" + hasil);
    break;
  case '/':
     hasil = bilangan1 / bilangan2;
        System.out.println(bilangan1 + "/" + bilangan2 + "=" + hasil);
    break;
  default:
    System.out.print("input operator salah");
}
```

    Masukkan bilangan pertama : 2.5
    Masukkan operator (+ - * /): *
    Masukkan bilangan kedua : 4
    2.5*4.0=10.0


2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int sisi1,sisi2,sisi3;
String Hasil;
System.out.println("Masukkan nilai sisi pertama : ");
sisi1 = input.nextInt();
System.out.println("Masukkan nilai sisi kedua : ");
sisi2 = input.nextInt();
System.out.println("Masukkan nilai sisi ketiga : ");
sisi3 = input.nextInt();

if(sisi1 == sisi2 && sisi1 == sisi3){
    System.out.println("Segitiga sama sisi");
} else if(sisi1 == sisi2 ){
    System.out.println("Segitiga sama kaki");
} else{
    System.out.println("Segitiga sembarang");
}
```

    Masukkan nilai sisi pertama : 
    12
    Masukkan nilai sisi kedua : 
    12
    Masukkan nilai sisi ketiga : 
    9
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
Scanner sc = new Scanner(System.in);
String namaMakanan;
int hargaMakanan, total;
int ekspres, biaya;

System.out.print("Masukkan nama makanan : ");
namaMakanan = sc.nextLine();
System.out.print("Masukkan harga makanan : ");
hargaMakanan = sc.nextInt();
System.out.print("Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya) ? ");
ekspres = sc.nextInt();

if((ekspres == 0) || (ekspres == 1)){
    if((ekspres == 0) && (hargaMakanan < 100000)){
        biaya = 20000;
    } else if((ekspres == 0) && (hargaMakanan >= 100000)){
        biaya = 30000;
    } else if((ekspres == 1) && (hargaMakanan < 100000)){
        biaya = 45000;
    } else if((ekspres == 1) && (hargaMakanan >= 100000)){
        biaya = 55000;
    }
    total = hargaMakanan + biaya;
} else {
    System.out.println("INPUT JENIS PENGIRIMAN SALAH !!! ");
}

System.out.println("\n");
System.out.println("STRUK PEMBELIAN");
System.out.println("\n");
System.out.println(namaMakanan+ "\t\t" + "Rp " + hargaMakanan);
System.out.println("Biaya pengiriman\t" + "Rp " + biaya);
System.out.println("TOTAL\t\t\t" + "Rp " + total)

```

    Masukkan nama makanan : Beef Bulgogi
    Masukkan harga makanan : 78000
    Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya) ? 1
    
    
    STRUK PEMBELIAN
    
    
    Beef Bulgogi		Rp 78000
    Biaya pengiriman	Rp 45000
    TOTAL			Rp 123000


4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.println("Masukkan Umur Anda: ");
umur =input.nextInt();

if(umur >=18){
     Scanner input = new Scanner(System.in);
     String kerja;
     System.out.println("Sudah Bekerja? ");
     kerja = input.nextLine();
     if(kerja.equalsIgnoreCase("bekerja")){
     int pendapatan,tanggungan;
     double biayaHidup;
     System.out.println("Masukkan Pendapatan Bulanan: ");
     pendapatan = input.nextInt();
     System.out.println("Masukkan Jumlah Tanggungan ");
     tanggungan = input.nextInt();
     biayaHidup = pendapatan / tanggungan;
     System.out.println("Biaya Hidup : "+ biayaHidup);
    if(biayaHidup<300000){
        System.out.println("Penduduk Miskin");
    } else {
         System.out.println("Bukan Penduduk Miskin");
    } 
} else{
         System.out.println("Penduduk Miskin");
     }
} else {
    Scanner input = new Scanner(System.in);
     String sekolah;
    System.out.println("Masih Sekolah? ");
    sekolah = input.nextLine();
     if(sekolah.equalsIgnoreCase("sekolah")){
        System.out.println("Bukan Penduduk Miskin");
     } else {
          System.out.println("Penduduk Miskin");
     }
}
```

    Masukkan Umur Anda: 
    15
    Masih Sekolah? 
    Sekolah
    Bukan Penduduk Miskin

