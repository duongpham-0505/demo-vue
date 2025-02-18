# demo-project-vuejs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


1. Vòng đời của một component trong Vue.js là gì?
Vòng đời của một component trong Vue.js bao gồm các giai đoạn khác nhau từ khi component được khởi tạo cho đến khi nó bị hủy. Các giai đoạn này bao gồm: khởi tạo, mount, cập nhật và hủy.

2. Các hook vòng đời chính trong Vue.js là gì?
Các hook vòng đời chính trong Vue.js bao gồm:

beforeCreate: Được gọi ngay khi instance của component được khởi tạo chưa gắn vào DOM.
created: Được gọi sau khi instance được khởi tạo.
beforeMount: Được gọi ngay trước khi mount bắt đầu.
mounted: Được gọi sau khi component được mount vào DOM.
beforeUpdate: Được gọi khi dữ liệu reactive thay đổi, trước khi thực hiện cập nhật DOM.
updated: Được gọi sau khi cập nhật xong DOM sau khi dữ liệu reactive thay đổi.
beforeUnmount: Được gọi ngay trước khi một instance của component bị hủy.
unmounted: Được gọi sau khi instance của component bị hủy.
3. Khi nào nên sử dụng created hook?
created hook thường được sử dụng để khởi tạo dữ liệu hoặc thực hiện các thao tác không liên quan đến DOM, chẳng hạn như gọi API để lấy dữ liệu ban đầu cho component.

4. Sự khác biệt giữa beforeCreate và created là gì?
beforeCreate: Được gọi ngay khi instance của component được khởi tạo. Tại thời điểm này, các dữ liệu reactive và sự kiện vẫn chưa được thiết lập.
created: Được gọi sau khi instance được khởi tạo. Lúc này, dữ liệu reactive và sự kiện đã được thiết lập, nhưng component chưa được mount vào DOM.
5. Khi nào sử dụng mounted hook?
mounted hook được sử dụng khi bạn cần thực hiện các thao tác liên quan đến DOM, chẳng hạn như khởi tạo thư viện bên thứ ba liên quan đến DOM hoặc thao tác trực tiếp với các phần tử DOM.

6. Sự khác biệt giữa beforeUpdate và updated là gì?
beforeUpdate: Được gọi khi dữ liệu reactive thay đổi, trước khi thực hiện cập nhật DOM. Hook này cho phép bạn thực hiện các thao tác trước khi DOM được cập nhật.
updated: Được gọi sau khi cập nhật xong DOM sau khi dữ liệu reactive thay đổi. Hook này cho phép bạn thực hiện các thao tác sau khi DOM đã được cập nhật.
7. Khi nào nên sử dụng beforeUnmount và unmounted hooks?
beforeUnmount: Được gọi ngay trước khi một instance của component bị hủy. Hook này cho phép bạn thực hiện các thao tác dọn dẹp trước khi component bị xóa khỏi DOM.
unmounted: Được gọi sau khi instance của component bị hủy. Tại thời điểm này, tất cả các sự kiện và dữ liệu reactive đã bị xóa bỏ.
8. Có thể sử dụng các hook vòng đời để tối ưu hóa hiệu suất không?
Có, bạn có thể sử dụng các hook vòng đời để tối ưu hóa hiệu suất. Ví dụ, bạn có thể sử dụng beforeUpdate để ngăn chặn các cập nhật không cần thiết hoặc beforeUnmount để dọn dẹp tài nguyên và sự kiện không cần thiết trước khi component bị hủy.

9. Làm thế nào để debug các vấn đề liên quan đến hook vòng đời?
Bạn có thể debug các vấn đề liên quan đến hook vòng đời bằng cách thêm các lệnh console.log trong từng hook để theo dõi thứ tự và thời điểm các hook được gọi. Ngoài ra, các công cụ như Vue Devtools cũng cung cấp thông tin chi tiết về các trạng thái và hook của component.

10. Có thể sử dụng các hook vòng đời trong Vue 3 như thế nào?
Trong Vue 3, bạn có thể sử dụng các hook vòng đời tương tự như trong Vue 2. Tuy nhiên, Vue 3 giới thiệu Composition API, cho phép bạn sử dụng các hook này dưới dạng hàm trong các thành phần setup.


Sự Khác Biệt Giữa Watchers (watch) và Computed Properties (computed) Là Gì?
Computed Properties (computed)
    Định nghĩa: Computed properties là các thuộc tính dựa trên các thuộc tính khác trong dữ liệu của component và được cache để tối ưu hóa hiệu suất.
    Khi nào nên sử dụng: Sử dụng computed properties khi bạn cần tính toán một giá trị dựa trên các thuộc tính dữ liệu khác và giá trị này có thể được sử dụng trong template.
Watchers (watch)
    Định nghĩa: Watchers là các hàm giám sát (watch) các thuộc tính dữ liệu reactive hoặc các computed properties và thực hiện các hành động khi các thuộc tính đó thay đổi.
    Khi nào nên sử dụng: Sử dụng watchers khi bạn cần thực hiện các tác vụ phức tạp hoặc bất đồng bộ dựa trên sự thay đổi của dữ liệu.