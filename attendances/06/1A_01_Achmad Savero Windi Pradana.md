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

    Masukkan nilai ujian (0-100): 80


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini

if(nilai >= 0 || nilai <=100){
   if(nilai >= 90 && nilai <=100){
        System.out.println("Nilai A, EXCELLENT!");
   } else if(nilai >= 80 && nilai <=89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
   } else if(nilai >= 60 && nilai <=79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
   } else if(nilai >= 60 && nilai <=79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
   } else if(nilai >= 50 && nilai <=59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
   } else {
        System.out.println("Nilai E, Anda tidak lulus!");
   }
}else {
       System.out.println("Nilai yang Anda masukan tidak valid!");
}
```

    Nilai B, Pertahankan prestasi Anda!


> Penjelasan kode program percobaan 1//Kode program diatas digunakan untuk mengecek rentang nilai if(nilai >= 0 && nilai <=100){, jika anda mendapatkan nilai dari if(nilai >= 90 && nilai <=100){ maka kode program akan menghasilkan output System.out.println("Nilai A, EXCELLENT!"); ,jika anda mendapat nilai dari  } else if(nilai >= 80 && nilai <=89){ maka kode program akan menghasilkan output System.out.println("Nilai B, Pertahankan prestasi Anda!"); , jika anda mendapatkan nilai dari  } else if(nilai >= 60 && nilai <=79){ maka kode program akan menghasilkan output System.out.println("Nilai C, Tingkatkan prestasi Anda!"); , jika anda mendapatkan nilai } else if(nilai >= 50 && nilai <=59){ maka kode program akan menghasilkan output System.out.println("Nilai D, Tingkatkan belajar Anda!"); , jika anda mendapat nilai di bawah 50 maka kode program akan menghasilkan output  Nilai E/Anda tidak lulus,jika anda memasukan nilai diatas 100 maka kode program akan menghasilkan output Nilai yang anda masukan tidak valid karena syarat nya adalah if(nilai >= 0 && nilai <=100){

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
// Jawaban pertanyaan 1
if(nilai >= 0 && nilai <=100){
   if(nilai >= 90 && nilai <=100){
        System.out.println("Nilai A, EXCELLENT!");  
   } else if(nilai >= 80 && nilai <=89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
   } else if(nilai >= 60 && nilai <=79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
   } else if(nilai >= 60 && nilai <=79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
   } else if(nilai >= 50 && nilai <=59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
   } else if(nilai <= 0){
        System.out.println("Nilai yang Anda masukkan kurang dari 0");
   
}else {
   System.out.println("Nilai yang Anda masukkan lebih dari 100");
   }

//Jawaban pertanyaan 2
fungsi sintaks if (nilai >= 0 && nilai <= 100)! adalah memberikan batasan nilai input yang diberikan atau perintah jika nilai 
yang diberikan lebih dari 100 atau kurang dari 0 maka output akan memucul adalah System.out.println("Nilai yang Anda masukan tidak valid!");

    
//Jawaban pertanyaan 3
if(nilai >= 0 || nilai <=100){
   if(nilai >= 90 && nilai <=100){
        System.out.println("Nilai A, EXCELLENT!");
   } else if(nilai >= 80 && nilai <=89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
   } else if(nilai >= 60 && nilai <=79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
   } else if(nilai >= 60 && nilai <=79){
        System.out.println("Nilai C, Tingkatkan prestasi Anda!");
   } else if(nilai >= 50 && nilai <=59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
   } else {
        System.out.println("Nilai E, Anda tidak lulus!");
   }
}else {
       System.out.println("Nilai yang Anda masukan tidak valid!");
}

Setelah di masukan kode diatas hasilnya nilai yang keluar E, karena nilai 105 tidak termasuk syarat rentang 0-100
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
    Masukkan besarnya penghasilan: 2400000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini
if(kategori.equalsIgnoreCase ("Pekerja")){
   if (penghasilan <= 2000000) 
       pajak = 0.1;
} else if (penghasilan <= 3000000){
    pajak = 0.15;
} else {
    pajak = 0.2;
}
gajiBersih = (int) (penghasilan -(penghasilan * pajak));
System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);

}else if (kategori.equalsIgnoreCase ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    } else if (penghasilan <= 3500000){
        pajak = 0.2;
    } else {
        pajak = 0.25;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println ("Gaji bersih yang Anda terima: " + gajiBersih);
}else {
    System.out.println("Kategori yang Anda masukkan salah!");
}
```

    Gaji bersih yang Anda terima: 2040000



    |   }else if (kategori.equalsIgnoreCase ("pebisnis")){

    illegal start of statement

    


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2//Kode program diatas digunakan untuk menghitung gaji bersih seseorang setelah dipotong pajak sesuai dengan kategorinya (pekerja dan pebisnis) dan besarnya penghasilan. if(kategori.equalsIgnoreCase ("Pekerja")){ atau ("pebisnis")) digunakan untuk membedakan kategori. if (penghasilan <= 2000000/2500000) pajak = 0.1;/0.15; } else if (penghasilan <= 3000000/3500000){ pajak = 0.15/0.2; } else { pajak = 0.2/0.25; digunakan untuk input nominal penghasilan setiap pekerja dan pebisnis, masuk dikategori pajak yang mana yang harus dibayar,}.gajiBersih = (int) (penghasilan -(penghasilan * pajak));System.out.println("Gaji bersih yang Anda terima: " + gajiBersih); digunakan untuk menghitung besarnya gaji bersih pekerja dan pebisnis.
}else {System.out.println("Kategori yang Anda masukkan salah!"); digunakan jika input yang anda masukan tidak ada dalam kategori.

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
//Jawaban nomor 1
karena sudah dibulatkan


//Jawaban nomor 2
untuk Tipe data integer, tipe data yang dipakai untuk menampung angka atau bilangan bulat

//Jawaban nomor 3
untuk membandingkan karakter pada variable String. tidak akan melihat huruf besar ataupun kecil, 
yang terpenting mempunyai nilai yang sama, maka akan tetap menghasilkan benar


//Jawaban nomor 4
membandingkan nilai pada dua buah variable, yang mempunyai data yang sama, dari segi huruf besar dan kecil, 
jadi jika ada salah satu huruf dengan ukuran yang tidak sama maka akan menghasilkan salah.


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
public class Percobaan1Vero{
	public static void main(String[] args) {
		Scanner scVero = new Scanner(System.in);
		double angka1, angka2, hasil1;
		char operator;

		System.out.println("Masukkan angka pertama : ");
		angka1 = scVero.nextDouble();

		System.out.println("Masukkan angka kedua : ");
		angka2 = scVero.nextDouble();

		System.out.println("Masukkan operator(+ - * /) : ");
		operator = scVero.next().charAt(0);

		switch(operator){
			case '+':
				hasil1 = angka1 + angka2;
				System.out.println(angka1 + " + " + angka2 + " = " + hasil1);
				break;
			case '-':
				hasil1 = angka1 - angka2;
				System.out.println(angka1 + " - " + angka2 + " = " + hasil1);
				break;
			case '*':
				hasil1 = angka1 * angka2;
				System.out.println(angka1 + " * " + angka2 + " = " + hasil1);
				break;
			case '/':
				hasil1 = angka1 / angka2;
				System.out.println(angka1 + " / " + angka2 + " = " + hasil1
					);
				break;

			default:
			System.out.println("operator yang anda masukkan salah");
		}
	}
}
```

2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini
import java.util.Scanner ;
public class VeroSegitiga {
 public static void main (String [] args) {
  Scanner nilai= new Scanner (System.in);
  int sisi1, sisi2 ,sisi3 ;
  
System.out.print ("sisi1= ");
sisi1 = nilai.nextInt ();
System.out.print ("sisi2= ");
sisi2 = nilai.nextInt ();
System.out.print ("sisi3= ");
sisi3 = nilai.nextInt ();


if ((sisi1 == 0) || (sisi2 == 0) || (sisi3 == 0)) {
 System.out.println("Bukan Segitiga");
} else {
if ((sisi1 == sisi2) && (sisi3 == sisi1))
 System.out.println("Segitiga Sama Sisi");
else
if ((sisi1 == sisi2) || (sisi1 == sisi3) || (sisi2 == sisi3))
 System.out.println("Segitiga Sama Kaki");
else
 System.out.println("Segitiga Sembarang");
 }
    }
} 


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
import java.util.Scanner ;
public class VeroWarung {
public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        int harga, total, ekspres;
        String makanan;

        System.out.println("Masukkan nama makanan: ");
        makanan = input.nextLine();
        System.out.print("Masukkan harga makanan: Rp. ");
        harga = input.nextInt();
        System.out.println("Apakah Anda ingin pengiriman ekspres? tekan iya untuk iya,tekan tidak untuk tidak? ");
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
    }
}
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

    Masukkan Umur: 19
    Apakah Anda memiliki pekerjaan (1=ya, 0=tidak)?1
    Masukkan pendapatperbulan Anda: Rp. 2500000
    Masukkan berapa tanggungan anak anda:2
    Anda termasuk penduduk mampu


```Java

```
