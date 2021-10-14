## JOBSHEET 5

## PEMILIHAN 1

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

    Masukkan sebuah bilangan: 12


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
if(bil%2 == 0){
System.out.println("Bilangan Genap");
}
else{
System.out.println("Bilangan Ganjil");
}

```

    Bilangan Genap


##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
// Ketik kode program di atas di bawah sini
String output = (bil % 2 == 0) ? "Bilangan Genap" : "Bilangan Ganjil";
System.out.println(output);

```

    Bilangan Genap


2. Jalankan dan amatilah hasilnya!
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!

#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit

### JAWABAN
3. Karena kedua output tersebut sama fungsinya, namun berbeda sintaksnya

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)


```Java
// Ketik kode program di atas di bawah sini
int nilai;
System.out.print("Masukkan sebuah bilangan: ");
nilai = input.nextInt();
 
```

    Masukkan sebuah bilangan: 12


+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
// Ketik kode program di atas di bawah sini
if(nilai >= 100){
    nilai += 10;
}
else{
    nilai -= 10;
}
System.out.println("Hasil akhir nilai adalah "+nilai)

```

    Hasil akhir nilai adalah 2


+ Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    nilai-=10;
    ```

2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

### JAWABAN
1. - nilai +=10 (menambahkan nilai 10 pada variabel nilai)
   - nilai -=10 (mengurangi nilai 10 pada variabel nilai)    
    
2.
int nilai, nilai2;
double rataRata;

System.out.print("Masukkan bilangan 1 : ");
nilai = input.nextInt();
System.out.print("Masukkan bilangan 2: ");
nilai2 = input.nextInt();

rataRata = (double) (nilai + nilai2) / 2;

if(rataRata >= 100) {
    rataRata -= 5;
} else {
    System.out.println("Hasil dari rata-rata kedua nilai tersebut adalah " + rataRata);
}

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
System.out.print("Masukkan umur Anda: ");
umur = input.nextInt();

```

    Masukkan umur Anda: 18


+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
// Ketik kode program di atas di bawah sini
if(umur > 60)
    System.out.println("Lansia");
else if(umur > 45)
    System.out.println("Tua");
else if(umur > 17)
    System.out.println("Dewasa");
else if(umur > 5)
    System.out.println("Lansia");
else
    System.out.println("Balita");

```

    Dewasa


+ Jalankan program dan amati apa yang terjadi!

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
System.out.print("Masukkan operator (+ - * /): ");
operator = sc.next().charAt(0);
```

    Masukkan angka pertama: 12
    Masukkan angka kedua: 12
    Masukkan operator (+ - * /): +


4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
// Ketik kode program di atas di bawah sini
switch(operator){
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

    12.0+12.0=24.0


5. Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```

### JAWABAN
1. - break : Sebagai pemberhentian kode ketika satu kondisi bernilai `true`
   - default : Sebagai pengganti `else` pada kondisi `if else`
2. Mencari karakter pertama pada `input` lalu menjadi isi dari variabel `operator`

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.
2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!

3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!

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


```Java
//No 1
import java.util.Scanner;
Scanner in = new Scanner(System.in);
int bil1, bil2;

System.out.println("Masukkan bilangan 1: ");
bil1 = in.nextInt();
System.out.println("Masukkan bilangan 2: ");
bil2 = in.nextInt();

String output = (bil % 2 <= 0)? "Bilangan 1":"Bilangan 2" ;
System.out.println("Bilangan terbesar adalah " +output);
```

    Masukkan bilangan 1: 
    16
    Masukkan bilangan 2: 
    13
    Bilangan terbesar adalah Bilangan 1


### MAKSUD No 1
Maksud dari kode program diatas adalah pertama kita menambahkan library Scanner, lalu mendeklarasikan Scanner, setelah itu menambahkan tipe data int dengan nilai bil1 dan bil2. perintah System.out.println(" ") digunakan untuk memunculkan tulisan yang ada pada tanda petik. in.nextInt digunakan untuk menyimpan data yang dimasukkan, kemudian ditambahkan ternery operator untuk memunculkan pilihan bilangan terbesar.


```Java
//NO 2
import java.util.Scanner;
Scanner in = new Scanner(System.in);
int umur;

System.out.println("Masukkan umur anda: ");
umur = in.nextInt();

if(umur >= 17) {
    System.out.println("Boleh berkendara");
} else {
    System.out.println("Tidak boleh berkendara");
}
```

    Masukkan umur anda: 
    18
    Boleh berkendara


### MAKSUD No 2
Maksud dari kode program diatas adalah pertama kita menambahkan library Scanner, lalu mendeklarasikan Scanner, setelah itu menambahkan tipe data int dengan nilai umur. perintah System.out.println(" ") digunakan untuk memunculkan tulisan yang ada pada tanda petik. in.nextInt digunakan untuk menyimpan data yang dimasukkan. if else merupakan pernyataan dari sebuah kondisi. Kondisi if digunakan untuk menyatakan jika pilihan pertama terpenuhi, kondisi else digunakan untuk menyatakan jika pilihan 
sebelumnya tidak terpenuhi.


```Java
//NO 3
import java.util.Scanner;
Scanner input = new Scanner(System.in);
double uas, uts, kuis, tugas, nilai;

System.out.println("Masukkan nilai UAS: ");
uas = input.nextDouble();
System.out.println("Masukkan nilai UTS: ");
uts = input.nextDouble();
System.out.println("Masukkan nilai kuis: ");
kuis = input.nextDouble();
System.out.println("Masukkan nilai tugas: ");
tugas = input.nextDouble();
uas = uas * 40/100;
uts = uts * 30/100;
kuis = kuis * 10/100;
tugas = tugas * 20/100;

nilai = uas + uts + kuis + tugas;

System.out.println("Nilai akhir Anda: "+nilai);
if(nilai < 65){
System.out.println("Anda remidi");
} else {
System.out.println("Anda tidak remidi");
}
```

    Masukkan nilai UAS: 
    85
    Masukkan nilai UTS: 
    80
    Masukkan nilai kuis: 
    70
    Masukkan nilai tugas: 
    75
    Nilai akhir Anda: 80.0
    Anda tidak remidi


### MAKSUD No 3
Maksud dari kode program diatas adalah pertama kita menambahkan library Scanner, lalu mendeklarasikan Scanner, setelah itu menambahkan tipe data double dengan nilai uts, uas, kuis, tugas. perintah System.out.println(" ") digunakan untuk memunculkan tulisan yang ada pada tanda petik. lalu in.nextDouble digunakan untuk menyimpan data yang dimasukkan. kemudian untuk memberikan nilai, digunakan operator aritmatika.setelah itu untuk menghitung nilai akhir, digunakan operator aritmatika penjumlahan dengan menghitung nilai uts, uas, kuis, dan tugas. Setelah itu, kondisi if digunakan untuk menyatakan jika pilihan pertama terpenuhi, dan kondisi else digunakan untuk menyatakan jika pilihan sebelumnya tidak terpenuhi.


```Java
//NO 4
import java.util.Scanner;
Scanner input = new Scanner(System.in);
double hargaA, hargaB, hargaC, total, diskon, bayar;
int jumlahA, jumlahB, jumlahC;
System.out.println("Masukkan harga barang A: ");
hargaA = input.nextDouble();
System.out.println("Masukkan jumlah barang A: ");
jumlahA = input.nextInt();
System.out.println("Masukkan harga barang B: ");
hargaB = input.nextDouble();
System.out.println("Masukkan jumlah barang B: ");
jumlahB = input.nextInt();
System.out.println("Masukkan harga barang C: ");
hargaC = input.nextDouble();
System.out.println("Masukkan jumlah barang C: ");
jumlahC = input.nextInt();
total = hargaA*jumlahA + hargaB*jumlahB + hargaC*jumlahC;

if(total > 1000000){
diskon = total * 10/100;
} 
else if(total > 500000){
diskon = total * 5/100;
}
else if(total > 200000){
diskon = total * 2/100;
}
else{
diskon = 0;
}

bayar = total - diskon;

System.out.println("----------------------------------------------------");
System.out.println("                     Struk Total                    ");
System.out.println("----------------------------------------------------");
System.out.println("Nama Barang\t|\tHarga\t|\tJumlah\t|\tTotal");
System.out.println(String.format("Barang A\t|\t%s\t|\t%s\t|\t%s",hargaA, jumlahA, hargaA*jumlahA));
System.out.println(String.format("Barang B\t|\t%s\t|\t%s\t|\t%s",hargaB, jumlahB, hargaB*jumlahB));
System.out.println(String.format("Barang C\t|\t%s\t|\t%s\t|\t%s",hargaC, jumlahC, hargaC*jumlahC));
System.out.println("Total      : "+total);
System.out.println("Diskon     : "+diskon);
System.out.println("Total Bayar: "+bayar);
```

    Masukkan harga barang A: 
    20000
    Masukkan jumlah barang A: 
    5
    Masukkan harga barang B: 
    30000
    Masukkan jumlah barang B: 
    6
    Masukkan harga barang C: 
    40000
    Masukkan jumlah barang C: 
    8
    ----------------------------------------------------
                         Struk Total                    
    ----------------------------------------------------
    Nama Barang	|	Harga	|	Jumlah	|	Total
    Barang A	|	20000.0	|	5	|	100000.0
    Barang B	|	30000.0	|	6	|	180000.0
    Barang C	|	40000.0	|	8	|	320000.0
    Total      : 600000.0
    Diskon     : 30000.0
    Total Bayar: 570000.0


### MAKSUD No 4
Maksud dari kode program diatas adalah pertama kita menambahkan library Scanner, lalu mendeklarasikan Scanner, lalu menambahkan variabel pada tipe data double dan int. lalu in.nextDouble digunakan untuk menyimpan data yang dimasukkan. perintah System.out.println(" ") digunakan untuk memunculkan tulisan yang ada pada tanda petik. lalu untuk menghitung nilai total, digunakan operator aritmatika. perintah if else-if else digunakan untuk banyak kondisi yang lebih dari dua. Fungsi dari string.format digunakan untuk mengeluarkan data dan menggabungkan variabel. %s digunakan untuk memanggil variabel.
