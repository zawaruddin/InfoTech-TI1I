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

    Masukkan nilai ujian (0-100): 92


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT! ");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid!");
}
```

    Nilai A, EXCELLENT! 


> Kode Program menggunakan struktur pengecekan kondisi bersarang dengan int nilai sebagai variabel data dan memiliki 5 kondisi yaitu kode program (nilai >= 90 && nilai <= 100), (nilai >= 80 && nilai <= 89), (nilai >= 60 && nilai <= 79), (nilai >= 50 && nilai <= 59), dan jika nilai yang dimasukkan kurang dari 50 maka kode yang keluar adalah Nilai E, Anda tidak lulus

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
// Jawaban pertanyaan
if(nilai >= 0 || nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT! ");
    } else if (nilai >= 80 && nilai <= 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >= 60 && nilai <= 79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
    } else if (nilai >= 50 && nilai <= 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else if (nilai < 0){
        System.out.println("Nilai yang Anda masukkan kurang dari 0");
    } else if (nilai > 100){
        System.out.println("Nilai yang Anda masukkan lebih dari 100");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
    
} else{
    System.out.println("Nilai yang Anda masukkan tidak valid!");
}
```

    Nilai yang Anda masukkan lebih dari 100

2. Sebagai batas untuk nilai yang akan dimasukkan
3. Karena operator && dan operator || memiliki fungsi yang berbeda jadi apabila operator && menjadi || maka hasilnya akan menjadi Nilai yang Anda masukkan lebih dari 100 

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
    Masukkan besarnya penghasilan: 4500000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
if (kategori.equalsIgnoreCase ("pekerja")){
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
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Gaji bersih yang Anda terima: 3375000


5. Jalankan program di atas. Amati apa yang terjadi!

> Kode Program menggunakan struktur pengecekan kondisi bersarang dengan kategori, penghasilan, gajiBersih, dan pajak sebagai variabel data dan memiliki 2 pengecekan yaitu Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis) lalu pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan lalu pada akhirnya akan dilakukan perhitungan gaji bersih yang diterima setelah dipotong pajak

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
```
1. Karena angka yang dihasilkan sudah dibulatkan oleh kode program (int) pada gajiBersih = (int) (penghasilan - (penghasilan * pajak));
2. Sebagai pembulat nilai yang dihasilkan oleh kode program gajiBersih = (int) (penghasilan - (penghasilan * pajak));
3. Dengan fungsi ini, maka objek string yang bersangkutan akan dibandingkan dengan objek string, pada parameter fungsi ini, dengan tanpa memperdulikan perbedaan antara huruf besar dengan huruf kecil. 
4. Hasilnya tetap sama dikarenakan equals memiliki fungsi objek string yang bersangkutan akan dibandingkan
dengan objek string, pada parameter fungsi ini, dengan membedakan antara huruf besar dengan huruf kecil.
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
int bilangan, bilangan2, hasil;
char operator;

System.out.print("Masukkan bilangan pertama: ");
bilangan = input.nextInt();
System.out.print("Masukkan operator (+, -, *, /):");
operator = input.next().charAt(0);
System.out.print("Masukkan bilangan kedua: ");
bilangan2 = input.nextInt();

switch(operator){
  case '+':
     hasil = bilangan + bilangan2;
    break;
  case '-':
     hasil = bilangan - bilangan2;
    break;
  case '*':
     hasil = bilangan * bilangan2;
    break;
  case '/':
     hasil = bilangan / bilangan2;
    break;
  default:
    System.out.print("Operator yang anda masukkan salah!");
}

if(operator == '+'  operator == '-'  operator == '*' || operator == '/') {
    System.out.print("%s %s %s ", bilangan, bilangan2, hasil);
}
```

    Masukkan bilangan pertama: 2.5
    Masukkan operator (+, -, *, /): *
    Masukkan bilangan kedua: 4
    2.5 * 4.0 = 10.0

2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
		int a, b, c;
		System.out.print("Masukan bilangan A:");
		a = input.nextInt();
		System.out.print("Masukan bilangan B:");
		b = input.nextInt();
		System.out.print("Masukan bilangan C:");
		c = input.nextInt();
		
		if(a == b && b!=c && a!=c || b==c && b!=a && a!=c || a==c && b!=a && b!=c) {
			System.out.print("Maka hasilnya : Segitiga sama Kaki"); 
		} else if(a == b || a==c || b ==c){
			System.out.print("Maka hasilnya : Segitiga sama Sisi");
		} else {
			System.out.print("Maka hasilnya : Segitiga Sembarang");
	}
```

    Masukan bilangan A:12
    Masukan bilangan B:12
    Masukan bilangan C:10
    Maka hasilnya : Segitiga sama Kaki

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
char namaMakanan1, namaMakanan2;
double hargaMakanan1, hargaMakanan2, biayaPengiriman1, biayaPengiriman2, total1, total2;
int pengiriman1, pengiriman2;

System.out.println("```");
System.out.print("Masukkan nama makanan: ");
namaMakanan1 = input.next().charAt(0);
System.out.print("Masukkan harga makanan: Rp ");
hargaMakanan1 = input.nextDouble();
System.out.print("Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? ");
pengiriman1 = input.nextInt();
System.out.println("STRUK PEMBELIAN");
System.out.println(String.format("%s          Rp %s", namaMakanan1, (int) hargaMakanan1));
if(pengiriman1 == 0 && hargaMakanan1 < 100000){
    total1 = (int) hargaMakanan1 + 20000;
    System.out.println("Biaya pengiriman  Rp 20000");
}else if(pengiriman1 == 0&& hargaMakanan1 > 100000){
    total1 = (int) hargaMakanan1 + 30000;
    System.out.println("Biaya pengiriman  Rp 30000");
}else if(pengiriman1 == 1&& hargaMakanan1 < 100000){
    total1 = (int) hargaMakanan1 + 45000;
    System.out.println("Biaya pengiriman  Rp 45000");
}else if(pengiriman1 == 1&& hargaMakanan1 > 100000){
    total1 = (int) hargaMakanan1 + 55000;
    System.out.println("Biaya pengiriman  Rp 55000");
}
System.out.println("TOTAL             Rp " + (int) total1);
System.out.println("```");
System.out.println("```");
System.out.print("Masukkan nama makanan: ");
namaMakanan2 = input.next().charAt(0);
System.out.print("Masukkan harga makanan: Rp ");
hargaMakanan2 = input.nextDouble();
System.out.print("Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? ");
pengiriman2 = input.nextInt();
System.out.println("STRUK PEMBELIAN");
System.out.println(String.format("%s          Rp %s", namaMakanan2, (int) hargaMakanan2));
if(pengiriman2 == 0 && hargaMakanan2 < 100000){
    total2 = (int) hargaMakanan2 + 20000;
    System.out.println("Biaya pengiriman  Rp 20000");
}else if(pengiriman2 == 0&& hargaMakanan2 > 100000){
    total2 = (int) hargaMakanan2 + 30000;
    System.out.println("Biaya pengiriman  Rp 30000");
}else if(pengiriman2 == 1&& hargaMakanan2 < 100000){
    total2 = (int) hargaMakanan2 + 45000;
    System.out.println("Biaya pengiriman  Rp 45000");
}else if(pengiriman2 == 1&& hargaMakanan2 > 100000){
    total2 = (int) hargaMakanan2 + 55000;
    System.out.println("Biaya pengiriman  Rp 55000");
}
System.out.println("TOTAL             Rp " + (int) total2);
System.out.println("```");
```

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
    Beef bulgogi      Rp 78000
    Biaya pengiriman  Rp 45000
    TOTAL             Rp 123000
    ```
4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur, tanggungan;
char sekolah, bekerja; 
double pendapatan, biayaHidup;
System.out.print("Masukkan umur: ");
umur = input.nextInt();
if(umur >= 18 ){
    System.out.println("Status : Bekerja");
    System.out.print("Sudah bekerja (ya & tidak): ");
    bekerja = input.next()charAt(0);
if(bekerja.equalsIgnoreCase ("ya") || bekerja.equalsIgnoreCase ("tidak")){   
    if(bekerja == ya){
        System.out.print("Masukkan pendapatan: Rp ");
        pendapatan = input.nextDouble();
        Systen.out.print("Masukkan jumlah anak: ");
        tanggungan = input.nextInt();
        biayaHidup = pendapatan / tanggungan;
        System.out.println("Biaya Hidup : " + (int) biayaHidup);
        if(biayaHidup < 300000){
            System.out.println("Penduduk Miskin");
        }else{
            System.out.println("Bukan Penduduk Miskin");
    }else(bekerja == tidak){
        System.out.println("Tidak Bekerja");
        System.out.println("Penduduk Miskin");
    }
} else(umur < 18){
    System.out.println("Status : Sekolah");
    System.out.print("Masih sekolah (ya & tidak): ");
    sekolah = input.next().charAt(0);
        if(sekolah.equalsIgnoreCase ("ya") || sekolah.equalsIgnoreCase ("tidak")){   
            if(sekolah == ya){    
                System.out.println("Masih Sekolah");
                System.out.println("Bukan Penduduk Miskin");
            }else(sekolah == tidak){
                System.out.println("Tidak Sekolah");
                System.out.println("Penduduk Miskin");
    }
```

    Masukkan umur: 18
    Status : Bekerja
    Sudah bekerja (ya & tidak): tidak
    Tidak Bekerja
    Penduduk Miskin