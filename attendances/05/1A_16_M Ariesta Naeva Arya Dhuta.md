## JOBSHEET 5

## PEMILIHAN 123

### Tujuan

Mahasiswa mampu menyelesaikan permasalahan/studi kasus menggunakan sintaks pemilihan 1 dan mengimplemantasikannya dalam bahasa pemrogaman java.

### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1 : Penggunaan if

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

    <p align="left">
    <img width="351" height="460" src="images/01.png">
    </p>
    

> Flowchart diatas digunakan untuk menentukan bilangan ganjil/genap, selanjutnya kita akan membuat programnya berdasarkan
> flowchart di atas!

2. Tambahkan library Scanner, deklarasi Scanner, dan buat variabel bil untuk menampung data yang diinput melalui keyboard

    ![](images/03.png)


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int bil;
System.out.print("Masukkan sebuah bilangan: ");
bil = input.nextInt();
```

    Masukkan sebuah bilangan: 1


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
if(bil%2 == 0){
    System.out.println("Bilangan Genap");
}else{
    System.out.println("Bilangan Ganjil");
}
```

    Bilangan Ganjil


##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
// Ketik kode program di atas di bawah sini
String output = (bil% 2 == 0)? "Bilangan Genap":"Bilangan Ganjil";
System.out.println(output);

```

    Bilangan Ganjil


2. Jalankan dan amatilah hasilnya!
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!

#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)


```Java
// Ketik kode program di atas di bawah sini
int nilai;
System.out.print("Masukkan sebuah bilangan: ");
nilai = input.nextInt();
 
```

    Masukkan sebuah bilangan: 21


+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
// Ketik kode program di atas di bawah sini
int nilai;
System.out.print("Masukkan sebuah bilangan: ");
nilai = input.nextInt();
if(nilai >= 100){
nilai += 10;
}else{
    nilai -= 10;
}
System.out.println("Hasil akhir nilai adalah: "+ nilai);
```

    Masukkan sebuah bilangan: 30
    Hasil akhir nilai adalah: 20


+ Jalankan program. Amati apa yang terjadi!
hasil nya yaitu 40 karena nilai 50 itu berada dibawah angka 100 jadi di kurangi 10

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    nilai-=10;
    ```
  ```
    nilai+=10;
    nilai-=10;
    ```
2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

### Jawaban
1.untuk menambah 10
  untuk mengurang 10

2.oke


```Java
int nilai1,nilai2,nilai;
System.out.print("Masukkan sebuah bilangan: ");
nilai1 = input.nextInt();
System.out.print("Masukkan sebuah bilangan: ");
nilai2 = input.nextInt();
nilai = (nilai1+nilai2)/2;
if(nilai >= 100){
nilai += 5;
}else{
    nilai -= 5;
}
System.out.println("Hasil akhir nilai adalah: "+ nilai);
```

    Masukkan sebuah bilangan: 30
    Masukkan sebuah bilangan: 10
    Hasil akhir nilai adalah: 15


#### Percobaan 3 : Penggunaan if else-if else

#### Waktu percobaan : 40 menit

+ Tambahakan library `Scanner`
+ Buatlah deklarasi `Scanner`
+ Buat variabel umur bertipe `int`

    ![](images/08.png)


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.println("Masukkan umur Anda: ");
umur = input.nextInt();
```

    Masukkan umur Anda: 
    12


+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.println("Masukkan umur Anda: ");
umur = input.nextInt();
if(umur>60)
    System.out.println("Lansia");
else if(umur > 45)
    System.out.println("Tua");
else if(umur > 17)
    System.out.println("Dewasa");
else if(umur > 5)
    System.out.println("Anak-anak");
else
    System.out.println("Balita");
```

    Masukkan umur Anda: 
    32
    Dewasa


+ Jalankan program dan amati apa yang terjadi!
Error soalnya ga ada petik,punya saya tidak bisa di run jadinya bingung 

##### Percobaan 4 : Penggunaan switch-case

#### Waktu percobaan : 40 menit

1. Deklarasikan Scanner
1. Buatlah variabel-variabel berikut

    ![](images/10.png)


```Java
// Ketik kode program di atas di bawah sini
Scanner sc = new Scanner(System.in);
double angka1, angka2, hasil;
char operator;
```

3. Kode program untuk meminta inputan dari keyboard

    ![](images/11.png)


```Java
// Ketik kode program di atas di bawah sini
System.out.print("Masukkan angka pertama: ");
angka1 = sc.nextDouble();
System.out.print("Masukkan angka kedua: ");
angka2 = sc.nextDouble();
System.out.print("Masukkan operator(+ - * /): ");
operator = sc.next().charAt(0);

```

    Masukkan angka pertama: 12
    Masukkan angka kedua: 31
    Masukkan operator(+ - * /): +


4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
// Ketik kode program di atas di bawah sini
Scanner sc = new Scanner(System.in);
double angka1, angka2, hasil;
char operator;
System.out.print("Masukkan angka pertama: ");
angka1 = sc.nextDouble();
System.out.print("Masukkan angka kedua: ");
angka2 = sc.nextDouble();
System.out.print("Masukkan operator(+ - * /): ");
operator = sc.next().charAt(0);
switch(operator) {
        case '+':
        hasil = angka1 + angka2;
        System.out.println(angka1 + "+" + angka2 + "=" + hasil);
        break;
        case '-':
        hasil = angka1 - angka2;
         System.out.println(angka1 + "-" + angka2 + "=" + hasil);
        break;
        case '*':
        hasil = angka1 * angka2;
        System.out.println(angka1 + "*" + angka2 + "=" + hasil);
        break;
        case '/':
        hasil = angka1 / angka2;
         System.out.println(angka1 + "/" + angka2 + "=" + hasil);
    break;
    default:
    System.out.println("Operator yang anda masukkan salah");
}
```

    Masukkan angka pertama: 12
    Masukkan angka kedua: 31
    Masukkan operator(+ - * /): +
    12.0+31.0=43.0


5. Jalankan program. Amati apa yang terjadi!


```Java
hasil akan ada .0 dibelakangnya karena memakai double
```

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```

### jawaban

1.fungsi dari break adalah agar perintah memberhentikan perintah atau mengakhiri  case

2.fungsi dari default adalah untuk saat nilai yang dimasukkan tidak cocok dengan case yg ada

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.
                
 ```Java
 import java.util.Scanner;
	public class ez {
		public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		int nilai1,nilai2,nilai;
		System.out.println("Masukkan Bilangan Pertama: ");
		nilai1 = sc.nextInt();
		System.out.println("Masukkan Bilangan Kedua: ");
		nilai2 = sc.nextInt();
		if(nilai1>nilai2){
			nilai = nilai1;
		}else{
			nilai = nilai2;
		}
		System.out.println("Hasil Akhir Adalah: " + nilai);

		
		}
}
 ```    
                Masukkan Bilangan Pertama:
                41
                Masukkan Bilangan Kedua:
                90
                Hasil Akhir Adalah: 90   
>   script di atas merupakan cara menentukan umur untuk dapat menggunakan kendaraan untuk variabel diatas saya menggunakan nilai1 untuk bilangan pertama,nilai2 untuk bilangan kedua dan nilai untuk variabel yang akan ditampilkan outputnya dan saya memakai tipe data int karena output nya angka nya hanya sedikit jadi saya pakai int saja 
                
2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!
```java
import java.util.Scanner;
	public class ez {
		public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		int umur;
		System.out.println("Masukkan umur: ");
		umur = sc.nextInt();
		if(umur>17){
		System.out.println("Boleh Berkendara le");
		}else{
		System.out.println("Anak kecil ga boleh berkendara " );
		}
		

		
		}
}
```
            Masukkan umur:
            12
            Anak kecil ga boleh berkendara 12
        

> script di atas merupakan cara menentukan umur untuk dapat menggunakan kendaraan untuk variabel diatas saya menggunakan umur dan tipe data int karena output nya angka nya hanya sedikit jadi saya pakai int saja

3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!

```java
import java.util.Scanner;
public class ez {
      public static void main(String[] args) {
Scanner input = new Scanner(System.in);
int uas, uts, kuis, tugas, nilai;

System.out.println("Masukkan nilai UAS: ");
uas = input.nextInt();
System.out.println("Masukkan nilai UTS: ");
uts = input.nextInt();
System.out.println("Masukkan nilai kuis: ");
kuis = input.nextInt();
System.out.println("Masukkan nilai tugas: ");
tugas = input.nextInt();
uas = uas * 40/100;
uts = uts * 30/100;
kuis = kuis * 10/100;
tugas = tugas * 20/100;

nilai = uas + uts + kuis + tugas;

System.out.println("Nilai akhir : "+nilai);
if(nilai < 65){
System.out.println("Anda remidi");
} else {
System.out.println("Anda tidak remidi");
}
}
}
```
        Masukkan nilai UAS:
        90
        Masukkan nilai UTS:
        70
        Masukkan nilai kuis:
        20
        Masukkan nilai tugas:
        30
        Nilai akhir : 65
        Anda tidak remidi
>script diatas yaitu untuk mengetahui siswa melakukakn remidi atau tidak saya tidak tau harus menjelaskan yang mana mungkin yang 40/100 itu artinya 40% kalo dijadikan pecahan agar lebih mudah ngitungny
4. Sebuah toko memberikan diskon kepada pelanggannya dengan ketentuan sebagai berikut:

| Total Belanja     | Potongan |
|-------------------|----------|
| >Rp. 200.000,00   | 2%       |
| >Rp. 500.000,00   | 5%       |
| >Rp. 1.000.000,00 | 10%      |

> Total belanja diperoleh dari pembelian tiga barang yaitu barang A, barang B, dan barang C. Ketika menginputkan harga barang juga menginputkan jumlah barang yang dibeli.

Contoh outputnya
```
Masukkan harga barang A   :100000
Masukkan jumlah barang A  :10
Masukkan harga barang B   :250000
Masukkan jumlah barang B  :5
Masukkan harga barang C   :150000
Masukkan jumlah barang C  :1
---------------------------------------------
                Struk total
---------------------------------------------
Nama Barang 	| 	Harga 	| 	Jumlah 	| 	Total
Barang A            100000         10        1000000   
Barang B            250000         5         1250000   
Barang C            150000         1         150000    
Total       :2400000
Diskon      :240000.0
Total Bayar :2160000.0
```

```java
import java.util.Scanner;
public class ez {
   public static void main(String[] args) {
   Scanner sc = new Scanner(System.in);
   int barangA,barangB,barangC;
   int jumlahA,jumlahB,jumlahC;
   
 
   System.out.println("Masukkan harga barang A : ");
   barangA = sc.nextInt();
   System.out.println("Masukkan jumlah barang A : ");
   jumlahA = sc.nextInt();
   System.out.println("Masukkan harga barang  B : ");
   barangB = sc.nextInt();
   System.out.println("Masukkan jumlah barang B : ");
   jumlahB = sc.nextInt();
   System.out.println("Masukkan harga barang C : ");
   barangC = sc.nextInt();
   System.out.println("Masukkan jumlah barang C : ");
   jumlahC = sc.nextInt();
   System.out.println("--------------------------------------- ");
   System.out.println("              Struk Total     : ");
   System.out.println("---------------------------------------");
   System.out.println("Nama Barang    |     Harga     |    Jumlah    |    Total ");
   System.out.println(String.format("Barang A\t%s\t\t%s\t\t%s",barangA,jumlahA,     jumlahA*barangA ));
   System.out.println(String.format("Barang B\t%s\t\t%s\t\t%s",barangB,jumlahB, jumlahB*barangB));
   System.out.println(String.format("Barang C\t%s\t\t%s\t\t%s",barangC,jumlahC, jumlahC*barangC));
   double total,totalBayar;
   double diskon=0;
   total = (jumlahA*barangA)+(jumlahB*barangB)+(jumlahC*barangC);
   System.out.println("Total   :" + total);


   if(total > 200000){
      diskon =(total * 2/100); 
      System.out.println("Diskon :" + diskon);
   }else if (total > 500000){
      diskon =(total * 5/100);
      System.out.println("Diskon :" + diskon);
   }else if (total > 1000000){
      diskon = (total * 10/100);
      System.out.println("Diskon :" + diskon);
   }
      totalBayar = total - diskon ;
      System.out.println("Total Bayar :" + totalBayar);

   }

   }

```
        Masukkan harga barang A :
        20000
        Masukkan jumlah barang A :
        3
        Masukkan harga barang  B :
        40000
        Masukkan jumlah barang B :
        2
        Masukkan harga barang C :
        30000
        Masukkan jumlah barang C :
        4
        ---------------------------------------
                    Struk Total     :
        ---------------------------------------
        Nama Barang    |     Harga     |    Jumlah    |      Total
        Barang A             20000           3               60000
        Barang B             40000           2               80000
        Barang C             30000           4               120000
        Total   :260000.0
        Diskon :5200.0
        Total Bayar :254800.0   

>Eh ya ini adalah script s saya jujur saya dibantu teman tapi akhirnya saya mengerti untuk string format itu berfungsi untuk memasukkan data variabel dengan dalam bentuk string dan %s sebagai template,dan juga urutan penempatan variabel di sebelah kanan juga harus tepat agar tidak keliru tampilan outputnya   