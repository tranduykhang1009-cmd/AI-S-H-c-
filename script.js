/**
 * ===================================================================
 * AI HỌC SỬ – QUANG TRUNG NGUYỄN HUỆ
 * Động cơ điều khiển JavaScript chính (Smart Heritage Interactive Engine)
 * Tối ưu cho Cuộc thi Khoa học Kỹ thuật (KHKT) Dành cho Học sinh Trung học
 * ===================================================================
 */

// --- 1. DỮ LIỆU LỊCH SỬ CHÍNH XÁC & KHO TRI THỨC SỬ LIỆU ---

// A. Dữ liệu Chiến trận
const BATTLES_DATA = {
  'rach-gam': {
    year: 'NĂM 1785 · CHIẾN DỊCH PHÍA NAM',
    title: 'Đại thắng Rạch Gầm – Xoài Mút',
    lead: 'Trận thủy chiến lừng lẫy tiêu diệt 5 vạn quân Xiêm xâm lược trên sông Tiền, khẳng định tài năng quân sự xuất chúng của Nguyễn Huệ.',
    steps: [
      {
        label: 'Bước 1: Bối cảnh',
        title: 'Quân Xiêm xâm lược Gia Định',
        desc: 'Nguyễn Ánh cầu viện vua Xiêm. Tháng 7/1784, 5 vạn quân Xiêm (2 vạn thủy binh, 3 vạn bộ binh) theo đường thủy bộ ồ ạt tràn vào đánh phá miền Tây Nam Bộ.'
      },
      {
        label: 'Bước 2: Mưu lược',
        title: 'Chọn địa hình & Nhử địch mai phục',
        desc: 'Nguyễn Huệ chọn khúc sông Rạch Gầm – Xoài Mút (Tiền Giang) dài khoảng 6-7km có cù lao rậm rạp làm trận địa mai phục. Đêm ngày 19/1/1785, quân Tây Sơn giả thua nhử chiến thuyền giặc vào lòng sông.'
      },
      {
        label: 'Bước 3: Đại thắng & Ý nghĩa',
        title: 'Tiêu diệt hoàn toàn quân thù',
        desc: 'Pháo hỏa hổ và thuyền chiến Tây Sơn từ hai nhánh sông và cù lao bất ngờ khóa đầu khóa đuôi, bắn chìm gần như toàn bộ thuyền giặc. 5 vạn quân Xiêm chỉ còn vài nghìn tên chạy thoát, từ đó "sợ Tây Sơn như sợ cọp".'
      }
    ],
    tactic: {
      title: 'Nghệ thuật quân sự độc đáo',
      desc: 'Lợi dụng dòng chảy con nước triều, địa hình cù lao rậm rạp; kết hợp nghi binh nhử địch với hỏa lực pháo thuyền đánh dồn ép tiêu diệt chớp nhoáng.'
    }
  },
  'bac-tien': {
    year: 'NĂM 1786 · THỐNG NHẤT GIANG SƠN',
    title: 'Nguyễn Huệ Tiến Quân Ra Bắc',
    lead: 'Giương cao ngọn cờ "Phù Lê diệt Trịnh", xóa bỏ ranh giới chia cắt Đàng Trong - Đàng Ngoài kéo dài hơn hai thế kỷ.',
    steps: [
      {
        label: 'Bước 1: Bối cảnh',
        title: 'Hạ thành Phú Xuân',
        desc: 'Tháng 5/1786, Nguyễn Huệ chỉ huy nghĩa quân tiến công giải phóng Phú Xuân (Huế), đánh tan quân Trịnh, thu phục toàn bộ vùng đất Thuận Hóa.'
      },
      {
        label: 'Bước 2: Diễn biến',
        title: 'Thần tốc tiến vào Thăng Long',
        desc: 'Thừa thắng, Nguyễn Huệ quyết định vượt sông Gianh tiến thẳng ra Bắc Hà. Quân Trịnh bạc nhược, tan rã nhanh chóng. Tháng 7/1786, nghĩa quân Tây Sơn tiến vào thành Thăng Long, lật đổ chúa Trịnh.'
      },
      {
        label: 'Bước 3: Ý nghĩa',
        title: 'Đặt nền móng thống nhất đất nước',
        desc: 'Nguyễn Huệ yết kiến vua Lê Hiển Tông, trao trả quyền bính và được phong Uy quốc công. Chiến dịch đã chấm dứt cục diện Trịnh - Nguyễn phân tranh hơn 200 năm, mở đường thống nhất quốc gia.'
      }
    ],
    tactic: {
      title: 'Nghệ thuật quân sự & Chính trị',
      desc: 'Nắm bắt thời cơ mau lẹ, hành quân táo bạo ngoài dự tính đối phương; kết hợp tài tình sức mạnh quân sự với sách lược chính trị chính nghĩa "Phù Lê diệt Trịnh".'
    }
  },
  'ngoc-hoi': {
    year: 'MÙA XUÂN KỶ DẬU 1789 · QUỐC THỔ TRƯỜNG TỒN',
    title: 'Đại phá 29 Vạn Quân Thanh (Ngọc Hồi – Đống Đa)',
    lead: 'Chiến công hiển hách bậc nhất trong lịch sử chống ngoại xâm, giải phóng Thăng Long chỉ trong 5 ngày đêm mùa xuân Tết Kỷ Dậu.',
    steps: [
      {
        label: 'Bước 1: Chuẩn bị',
        title: 'Lên ngôi Hoàng đế & Hành quân thần tốc',
        desc: '22/12/1788 (25/11 Âm lịch), Nguyễn Huệ lên ngôi Hoàng đế tại núi Bân (Huế), lấy niên hiệu Quang Trung rồi lập tức tiến quân ra Bắc. Tuyển thêm quân ở Nghệ An, duyệt binh tại Tam Điệp – Biện Sơn, hẹn ba quân ngày mùng 7 Tết ăn Tết ở Thăng Long.'
      },
      {
        label: 'Bước 2: Đột kích',
        title: 'Hạ đồn Hà Hồi & Công phá Ngọc Hồi',
        desc: 'Đêm mùng 3 Tết, bí mật vây kín đồn Hà Hồi, bắc loa gọi hàng khiến giặc khiếp vía đầu hàng. Rạng sáng mùng 5 Tết, đích thân vua Quang Trung chỉ huy voi chiến và khiên rơm ướt phá tan cứ điểm kiên cố Ngọc Hồi.'
      },
      {
        label: 'Bước 3: Toàn thắng',
        title: 'Hạ đồn Đống Đa – Giải phóng Thăng Long',
        desc: 'Cùng lúc, đạo quân đô đốc Long bất ngờ tập kích đồn Khương Thượng (Đống Đa), tướng Sầm Nghi Đống thắt cổ tự tử. Tôn Sĩ Nghị hoảng loạn vượt cầu phao chạy trốn. Chiều mùng 5 Tết, áo bào đỏ sạm màu khói súng, vua Quang Trung tiến vào Thăng Long.'
      }
    ],
    tactic: {
      title: 'Đỉnh cao nghệ thuật thần tốc & Bất ngờ',
      desc: 'Hành quân luân phiên ngày đêm; tiến công đồng loạt 5 đạo quân bất ngờ vào đúng dịp Tết Nguyên Đán khi địch lơ là; phối hợp chặt chẽ voi chiến xung kích và pháo hỏa hổ mở đường.'
    }
  }
};

// B. Dữ liệu 8 Hiện vật Bảo tàng số
const MUSEUM_ITEMS = [
  {
    title: 'Tượng Hoàng đế Quang Trung',
    sub: 'Hình tượng Người Anh hùng áo vải Tây Sơn',
    category: 'Nhân vật lịch sử',
    img: 'https://cdn.phototourl.com/member/2026-10-10-6e351551-6ec2-4dde-aba2-f8685fbc081e.jpg',
    desc: 'Bức tượng khắc họa chân dung Hoàng đế Quang Trung – Nguyễn Huệ với thần thái uy nghi, cương nghị, mắt sáng như chớp, tượng trưng cho ý chí độc lập, tự cường và khát vọng non sông liền một dải.',
    details: 'Tượng được đúc bằng đồng nguyên khối, đặt tại khuôn viên Bảo tàng Quang Trung (Bình Định). Chi tiết áo giáp và ánh mắt thể hiện trọn vẹn khí phách vị tướng bách chiến bách thắng trong lịch sử dân tộc.',
    source: 'Bảo tàng Quang Trung (Bình Định)'
  },
  {
    title: 'Mô hình Thủy chiến Rạch Gầm – Xoài Mút',
    sub: 'Trận địa phục kích sông nước Nam Bộ năm 1785',
    category: 'Chiến thắng 1785',
    img: 'https://cdn.phototourl.com/member/2026-10-10-215f266e-3b24-4bca-8112-0c0f888f5e7e.jpg',
    desc: 'Sa bàn tái hiện chi tiết khúc sông Tiền từ Rạch Gầm đến Xoài Mút, nơi Nguyễn Huệ bố trí các cánh quân phục kích tiêu diệt toàn bộ thủy đội quân Xiêm.',
    details: 'Mô hình mô phỏng dòng chảy, vị trí cắm cọc, cù lao Thới Sơn và hướng tấn công bất ngờ từ các nhánh rạch, minh chứng cho việc vận dụng địa hình sông ngòi đỉnh cao của nghĩa quân Tây Sơn.',
    source: 'Khu di tích Rạch Gầm – Xoài Mút (Tiền Giang)'
  },
  {
    title: 'Tàu chiến của Quân đội Tây Sơn',
    sub: 'Phương tiện chiến lược trên đường sông & duyên hải',
    category: 'Quân sự Tây Sơn',
    img: 'https://cdn.phototourl.com/member/2026-10-10-0c51ea4f-4ec7-4b04-852e-7ac9d393d85b.jpg',
    desc: 'Chiến hạm Tây Sơn có kích thước lớn, trang bị nhiều đại bác hỏa lực mạnh, vừa có khả năng cơ động trên sông lớn vừa tác chiến hiệu quả ven biển.',
    details: 'Theo các ghi chép của phương Tây thời bấy giờ, thủy quân Tây Sơn có những chiến hạm trang bị tới 50-60 khẩu pháo, là lực lượng hải quân hùng hậu bậc nhất khu vực Đông Nam Á cuối thế kỷ XVIII.',
    source: 'Tư liệu Lịch sử Hải quân Việt Nam'
  },
  {
    title: 'Giếng nước cổ Ba Anh Em Tây Sơn',
    sub: 'Dấu tích ký ức quê hương làng Kiên Mỹ',
    category: 'Di tích khảo cổ',
    img: 'https://cdn.phototourl.com/member/2026-10-10-b9d389f9-c763-4c0c-ac05-ca82e7cf77f2.jpg',
    desc: 'Giếng nước cổ nằm trong vườn nhà cũ của ba anh em Tây Sơn (Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ), nguồn nước ngọt mát nuôi dưỡng những vị anh hùng hào kiệt.',
    details: 'Giếng nước được ghép bằng đá tổ ong ong cổ xưa, cùng với cây me cổ thụ hàng trăm năm tuổi là hai chứng tích lịch sử vô giá còn nguyên vẹn cho đến ngày nay tại huyện Tây Sơn, tỉnh Bình Định.',
    source: 'Di tích Quốc gia đặc biệt Đền thờ Tây Sơn Tam Kiệt'
  },
  {
    title: 'Vũ khí Binh lính Tây Sơn',
    sub: 'Trang bị chiến đấu thô sơ nhưng dũng mãnh',
    category: 'Khí giới quân sự',
    img: 'https://cdn.phototourl.com/member/2026-10-10-3402fa23-3542-4dda-be01-dc2bed15390e.jpg',
    desc: 'Bao gồm giáo, mác, đoản đao, kiếm lệnh và côn nhị khúc – những binh khí gắn liền với tinh hoa võ thuật cổ truyền Bình Định của nghĩa quân áo vải.',
    details: 'Các hiện vật được khai quật tại các căn cứ Tây Sơn thượng đạo và hạ đạo. Chúng phản ánh tinh thần chiến đấu quả cảm và sự khổ luyện võ nghệ bền bỉ của người lính nghĩa quân.',
    source: 'Bảo tàng Lịch sử Quốc gia'
  },
  {
    title: 'Súng thần công và Hỏa pháo Tây Sơn',
    sub: 'Vũ khí hỏa lực tối tân thế kỷ XVIII',
    category: 'Hỏa khí đại bác',
    img: 'https://cdn.phototourl.com/member/2026-10-10-d0725d0a-6526-44c2-8652-6fcbf3a49f0c.jpg',
    desc: 'Súng thần công đúc bằng đồng và sắt cùng các loại hỏa pháo, ống hỏa hổ dùng để bắn đạn cháy và mảnh sắt gây sát thương diện rộng và thiêu rụi đồn lũy giặc.',
    details: 'Vua Quang Trung đặc biệt chú trọng chế tạo và sử dụng pháo binh. Hỏa hổ Tây Sơn là vũ khí bí mật gây kinh hoàng cho quân Xiêm lẫn 29 vạn quân Mãn Thanh khi công phá đồn Ngọc Hồi.',
    source: 'Hiện vật lưu trữ Bảo tàng Lịch sử Quân sự Việt Nam'
  },
  {
    title: 'Lược đồ Trận Rạch Gầm – Xoài Mút',
    sub: 'Sơ đồ thế trận quân sự & hướng giáp công',
    category: 'Tư liệu tác chiến',
    img: 'https://cdn.phototourl.com/member/2026-10-10-3709296d-38e1-4017-83a3-e9f52e85de3e.jpg',
    desc: 'Bản đồ quân sự chỉ rõ vị trí bố trí pháo binh, đại bản doanh Tây Sơn và các mũi tiến công siết chặt vòng vây chia cắt đội hình thuyền giặc Xiêm.',
    details: 'Lược đồ là tài liệu học tập trực quan giúp thế hệ trẻ hình dung nghệ thuật bao vây tiêu diệt chiến lược, biến sông Tiền thành mồ chôn quân xâm lược phương Nam.',
    source: 'Viện Lịch sử Quân sự Việt Nam'
  },
  {
    title: 'Người lính Tây Sơn khoảng năm 1793',
    sub: 'Trang phục và diện mạo quân đội triều Quang Trung',
    category: 'Tranh ký họa lịch sử',
    img: 'https://cdn.phototourl.com/member/2026-10-10-ddf6ed08-51c6-4575-98e0-fece905c189a.jpg',
    desc: 'Bức ký họa do phái bộ ngoại giao Macartney của Anh thực hiện năm 1793 mô tả diện mạo, quân phục và tác phong kỷ luật của người lính thời Tây Sơn.',
    details: 'Hình vẽ cho thấy người lính Tây Sơn mặc áo giáp ngắn, đội nón chóp nhọn, tay cầm giáo dài, thể hiện vẻ khỏe khoắn, kỷ luật nghiêm minh và phong thái tự tin của quân đội một vương triều quật khởi.',
    source: 'Tư liệu Phái đoàn Ngoại giao Macartney (1793)'
  }
];

// C. Dữ liệu Bộ Kiểm chứng Tin Giả (Fact-Checking Engine)
const FACT_CHECK_DATABASE = {
  1: {
    claim: 'Có phải vua Quang Trung cho quân ăn Tết Nguyên Đán sớm trước khi đánh đồn Ngọc Hồi – Đống Đa?',
    status: 'correct',
    statusText: 'CHÍNH XÁC (ĐÚNG THỰC TẾ)',
    explanation: 'Tại phòng tuyến Tam Điệp (Ninh Bình) vào ngày 30 tháng Chạp năm Mậu Thân (1788), vua Quang Trung đã tổ chức khao quân và cho ba quân ăn Tết trước. Ông dõng dạc tuyên bố: "Nay hãy làm tiệc ăn Tết Nguyên Đán trước, đợi sang xuân, ngày mồng 7 vào Thăng Long sẽ mở tiệc ăn mừng." Thậm chí quân Tây Sơn còn toàn thắng sớm hơn dự kiến vào ngày mùng 5 Tết!',
    source: 'Hoàng Lê Nhất Thống Chí (Ngô gia văn phái) & Đại Nam Chính Biên Liệt Truyện.'
  },
  2: {
    claim: 'Có đúng là vua Quang Trung từng có kế hoạch ngoại giao đòi nhà Thanh trả lại đất Lưỡng Quảng?',
    status: 'correct',
    statusText: 'CHÍNH XÁC (CÓ CĂN CỨ SỬ LIỆU)',
    explanation: 'Sau chiến thắng năm 1789, vua Quang Trung thực thi chính sách bang giao khéo léo nhưng cương quyết. Ông cử sứ giả sang Yên Kinh cầu phong, đồng thời thăm dò yêu cầu nhà Thanh trao trả đất Quảng Đông, Quảng Tây (đất Lưỡng Quảng) vốn thuộc cố thổ Giao Chỉ xưa và xin cưới một công chúa nhà Thanh. Đáng tiếc khi kế hoạch đang chuẩn bị thì nhà vua đột ngột qua đời năm 1792.',
    source: 'Đại Nam Thực Lục & Việt Nam Sử Lược (Trần Trọng Kim).'
  },
  3: {
    claim: 'Nguyễn Ánh và nghĩa quân Tây Sơn từng là đồng minh thân thiết cùng đánh đuổi giặc ngoại xâm?',
    status: 'incorrect',
    statusText: 'HOÀN TOÀN SAI LỆCH',
    explanation: 'Đây là thông tin hoàn toàn sai. Nguyễn Ánh (sau này là vua Gia Long triều Nguyễn) và phong trào Tây Sơn là hai thế lực đối địch sâu sắc. Thậm chí chính Nguyễn Ánh đã sang Xiêm cầu viện vua Xiêm đưa 5 vạn quân sang xâm lược nước ta năm 1784, sau đó bị Nguyễn Huệ đánh tan tành tại Rạch Gầm – Xoài Mút năm 1785.',
    source: 'Chính sử Việt Nam: Khâm Định Việt Sử Thông Giám Cương Mục.'
  },
  4: {
    claim: 'Quân Tây Sơn hành quân từ Phú Xuân (Huế) ra Tam Điệp – Thăng Long mất hơn một tháng đường bộ?',
    status: 'incorrect',
    statusText: 'SAI LỆCH (BÁC BỎ)',
    explanation: 'Quân Tây Sơn nổi tiếng với tốc độ hành quân thần tốc kỷ lục. Từ Phú Xuân (Huế) ra đến Nghệ An và Tam Điệp chỉ mất khoảng 10 ngày (từ 25/11 đến 20/12 Âm lịch), vừa đi vừa tuyển quân và duyệt binh. Bí quyết là cách tổ chức luân phiên: ba người một tốp, hai người cáng một người nằm nghỉ, thay phiên nhau đi suốt ngày đêm không ngừng nghỉ.',
    source: 'Hoàng Lê Nhất Thống Chí & Lịch sử Quân sự Việt Nam.'
  },
  5: {
    claim: 'Hoàng đế Quang Trung là vị vua đầu tiên đề cao chữ Nôm thành văn tự chính thức của quốc gia?',
    status: 'correct',
    statusText: 'CHÍNH XÁC (ĐÚNG SỬ LIỆU)',
    explanation: 'Quang Trung là vị hoàng đế có tầm nhìn văn hóa tiến bộ vượt bậc. Ông lập Sùng Chính Viện, giao cho danh sĩ La Sơn Phu Tử Nguyễn Thiếp phụ trách việc dịch các sách chữ Hán sang chữ Nôm, đồng thời dùng chữ Nôm trong các chiếu chỉ, thi cử khoa bảng, thể hiện tinh thần tự tôn ngôn ngữ dân tộc sâu sắc.',
    source: 'Chiếu Lập Viện Sùng Chính (1791) & Các văn bản triều Tây Sơn.'
  },
  6: {
    claim: 'Chỉ huy quân Thanh là Tôn Sĩ Nghị đã dũng cảm tử trận trên chiến trường Thăng Long?',
    status: 'incorrect',
    statusText: 'HOÀN TOÀN SAI LỆCH',
    explanation: 'Khi nghe tin đồn Đống Đa và Ngọc Hồi thất thủ, Tổng đốc Lưỡng Quảng Tôn Sĩ Nghị sợ mất mật, "ngựa không kịp đóng yên, người không kịp mặc giáp", vội vã cùng vài tên kỵ binh vượt cầu phao sông Nhị (sông Hồng) chạy trốn về phương Bắc, bỏ lại cả sắc thư, quân ấn và hàng vạn tàn quân chen chúc làm đứt cầu phao chết đuối.',
    source: 'Hoàng Lê Nhất Thống Chí, Hồi thứ 14.'
  },
  7: {
    claim: 'Nghĩa quân Tây Sơn đã sử dụng đội quân voi chiến dũng mãnh mang hỏa hổ trong trận Ngọc Hồi?',
    status: 'correct',
    statusText: 'CHÍNH XÁC (ĐÚNG SỬ LIỆU)',
    explanation: 'Trong trận công phá đồn Ngọc Hồi rạng sáng mùng 5 Tết Kỷ Dậu, vua Quang Trung đích thân cưỡi voi đốc chiến, dẫn đầu đội hình hơn 100 thớt voi chiến. Mỗi thớt voi chở theo các chiến sĩ mang ống hỏa hổ phun lửa, kết hợp các tấm ván ghép bọc rơm ướt che chắn tên đạn của địch, tạo thành mũi giáp công dũng mãnh bẻ gãy tuyến phòng thủ kiên cố của quân Thanh.',
    source: 'Thánh Vũ Ký (Ngụy Nguyên - nhà Thanh) & Hoàng Lê Nhất Thống Chí.'
  }
};

// D. Ngân hàng 30 Câu hỏi Trắc nghiệm chuẩn KHKT (3 Cấp độ)
const QUIZ_QUESTIONS = {
  'co-ban': [
    {
      category: 'Mốc lịch sử căn bản',
      question: 'Người anh hùng áo vải Nguyễn Huệ sinh vào năm nào và ở đâu?',
      options: ['Năm 1753 tại vùng Tây Sơn, Bình Định', 'Năm 1740 tại Thăng Long, Hà Nội', 'Năm 1765 tại Gia Định, Sài Gòn', 'Năm 1789 tại Phú Xuân, Huế'],
      correct: 0,
      explain: 'Nguyễn Huệ sinh năm 1753 tại làng Kiên Mỹ, ấp Tây Sơn, huyện Phù Ly, phủ Quy Nhơn (nay thuộc thị trấn Phú Phong, huyện Tây Sơn, tỉnh Bình Định).'
    },
    {
      category: 'Phong trào Tây Sơn',
      question: 'Phong trào khởi nghĩa Tây Sơn chính thức bùng nổ vào năm nào?',
      options: ['Năm 1771', 'Năm 1785', 'Năm 1786', 'Năm 1789'],
      correct: 0,
      explain: 'Mùa xuân năm 1771, ba anh em Nguyễn Nhạc, Nguyễn Huệ và Nguyễn Lữ dựng cờ khởi nghĩa tại căn cứ Tây Sơn thượng đạo (An Khê, Gia Lai).'
    },
    {
      category: 'Tây Sơn Tam Kiệt',
      question: '"Tây Sơn Tam Kiệt" là danh xưng dùng để chỉ ba anh em nào?',
      options: ['Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ', 'Nguyễn Huệ, Nguyễn Trãi, Nguyễn Du', 'Nguyễn Ánh, Nguyễn Huệ, Nguyễn Nhạc', 'Nguyễn Thiếp, Ngô Thì Nhậm, Nguyễn Huệ'],
      correct: 0,
      explain: 'Ba anh em lãnh đạo phong trào Tây Sơn là Nguyễn Nhạc (Tây Sơn vương/Thái Đức hoàng đế), Nguyễn Huệ (Quang Trung hoàng đế) và Nguyễn Lữ (Đông Định vương).'
    },
    {
      category: 'Thủy chiến miền Nam',
      question: 'Trận thủy chiến Rạch Gầm – Xoài Mút năm 1785 diễn ra trên địa bàn tỉnh nào ngày nay?',
      options: ['Tiền Giang', 'Bến Tre', 'Vĩnh Long', 'Cần Thơ'],
      correct: 0,
      explain: 'Khúc sông Rạch Gầm – Xoài Mút thuộc sông Tiền, nay thuộc địa phận huyện Châu Thành, tỉnh Tiền Giang.'
    },
    {
      category: 'Khẩu hiệu nghĩa quân',
      question: 'Khẩu hiệu nổi tiếng của phong trào Tây Sơn trong giai đoạn đầu khởi nghĩa là gì?',
      options: ['Lấy của người giàu chia cho người nghèo', 'Phù Trịnh diệt Nguyễn', 'Bình Ngô khai quốc', 'Độc lập dân tộc trên hết'],
      correct: 0,
      explain: 'Nghĩa quân Tây Sơn đề ra khẩu hiệu "Lấy của nhà giàu chia cho dân nghèo", được đông đảo nhân dân và tầng lớp cùng khổ hưởng ứng nhiệt liệt.'
    },
    {
      category: 'Chiến thắng 1785',
      question: 'Trong trận Rạch Gầm – Xoài Mút, quân Tây Sơn đã đánh tan quân xâm lược của nước nào?',
      options: ['Quân Xiêm (Thái Lan)', 'Quân Mãn Thanh', 'Quân Pháp', 'Quân Chân Lạp'],
      correct: 0,
      explain: 'Quân Tây Sơn dưới sự chỉ huy của Nguyễn Huệ đã đập tan 5 vạn quân xâm lược Xiêm (Thái Lan) do Chiêu Tăng và Chiêu Sương cầm đầu.'
    },
    {
      category: 'Bắc tiến 1786',
      question: 'Năm 1786, Nguyễn Huệ tiến quân ra Bắc Hà với khẩu hiệu chính trị nào?',
      options: ['Phù Lê diệt Trịnh', 'Lật đổ vua Lê lập triều mới', 'Thống nhất Đàng Trong Đàng Ngoài', 'Trừ khử chúa Nguyễn'],
      correct: 0,
      explain: 'Nguyễn Huệ giương cao ngọn cờ "Phù Lê diệt Trịnh" để tập hợp lòng dân Bắc Hà, lật đổ tập đoàn phong kiến chúa Trịnh.'
    },
    {
      category: 'Đại phá quân Thanh',
      question: 'Chiến thắng Ngọc Hồi – Đống Đa đại phá 29 vạn quân Thanh diễn ra vào mùa xuân năm nào?',
      options: ['Năm 1789 (Kỷ Dậu)', 'Năm 1785 (Ất Tỵ)', 'Năm 1786 (Bính Ngọ)', 'Năm 1792 (Nhâm Tý)'],
      correct: 0,
      explain: 'Chiến dịch thần tốc giải phóng Thăng Long toàn thắng vào mùng 5 Tết Kỷ Dậu (năm 1789).'
    },
    {
      category: 'Lên ngôi Hoàng đế',
      question: 'Trước khi xuất quân đánh đuổi quân Thanh, Nguyễn Huệ lên ngôi Hoàng đế tại địa danh nào?',
      options: ['Núi Bân (Phú Xuân - Huế)', 'Thành Quy Nhơn (Bình Định)', 'Đền Ngọc Hồi (Hà Nội)', 'Phòng tuyến Tam Điệp (Ninh Bình)'],
      correct: 0,
      explain: 'Ngày 22/12/1788 (25/11 Âm lịch), Nguyễn Huệ làm lễ tế cáo trời đất tại núi Bân (Huế), chính thức lên ngôi Hoàng đế lấy niên hiệu Quang Trung.'
    },
    {
      category: 'Di sản lịch sử',
      question: 'Hoàng đế Quang Trung qua đời vào năm nào, để lại niềm tiếc thương vô hạn cho dân tộc?',
      options: ['Năm 1792', 'Năm 1789', 'Năm 1802', 'Năm 1790'],
      correct: 0,
      explain: 'Vua Quang Trung đột ngột băng hà vào ngày 16 tháng 9 năm 1792 (29 tháng 7 Âm lịch) ở tuổi 39, khi tài năng và sự nghiệp đang độ rực rỡ nhất.'
    }
  ],
  'trung-cap': [
    {
      category: 'Chiến thuật quân sự',
      question: 'Chiến thuật nào đóng vai trò then chốt trong thắng lợi Rạch Gầm – Xoài Mút 1785?',
      options: ['Nhử giặc vào khúc sông hiểm trở rồi khóa đuôi phục kích bằng pháo thuyền', 'Công thành bao vây dài ngày tiêu hao sinh lực địch', 'Tấn công trực diện bằng bộ binh trên cạn', 'Cầu viện hỏa lực từ tàu buôn phương Tây'],
      correct: 0,
      explain: 'Nguyễn Huệ triệt để khai thác thủy triều và địa hình cù lao, dùng thuyền nhẹ nhử địch vào trận địa mai phục rồi hợp vây bằng pháo binh.'
    },
    {
      category: 'Căn cứ chiến lược',
      question: 'Căn cứ ban đầu khi phong trào Tây Sơn mới phát động nằm ở đâu?',
      options: ['Tây Sơn thượng đạo (vùng An Khê, Gia Lai)', 'Tây Sơn hạ đạo (Bình Định)', 'Phủ Quy Nhơn', 'Cửa biển Thị Nại'],
      correct: 0,
      explain: 'Căn cứ ban đầu là vùng rừng núi Tây Sơn thượng đạo hiểm trở, có sự ủng hộ chí tình của đồng bào các dân tộc thiểu số Ba Na, Chăm.'
    },
    {
      category: 'Quân thần triều Tây Sơn',
      question: 'Nữ tướng kiệt xuất nào của nhà Tây Sơn chỉ huy đội tượng binh dũng mãnh?',
      options: ['Đô đốc Bùi Thị Xuân', 'Bà Triệu', 'Lê Chân', 'Nguyễn Thị Dung'],
      correct: 0,
      explain: 'Đô đốc Bùi Thị Xuân (vợ danh tướng Trần Quang Diệu) là nữ tướng lừng danh bậc nhất thời Tây Sơn, trực tiếp huấn luyện và chỉ huy đội voi chiến oai hùng.'
    },
    {
      category: 'Hành quân thần tốc',
      question: 'Phương pháp nào giúp quân Tây Sơn hành quân thần tốc từ Huế ra Tam Điệp trong thời gian ngắn kỷ lục?',
      options: ['Ba người một tốp, hai người cáng một người nghỉ luân phiên ngày đêm', 'Toàn bộ quân lính cưỡi ngựa chiến chạy liên tục', 'Sử dụng toàn bộ thuyền buồm xuôi chiều gió biển', 'Đi tàu hỏa vận tải dã chiến'],
      correct: 0,
      explain: 'Nghệ thuật hành quân luân phiên độc đáo: ba người một nhóm có võng cáng, hai người khiêng một người nằm nghỉ, đổi phiên liên tục ngày đêm không dừng bước.'
    },
    {
      category: 'Địa danh lịch sử',
      question: 'Phòng tuyến chiến lược do Ngô Thì Nhậm và Ngô Văn Sở xây dựng để chặn bước quân Thanh là gì?',
      options: ['Phòng tuyến Tam Điệp – Biện Sơn', 'Phòng tuyến sông Cầu (Như Nguyệt)', 'Phòng tuyến Chi Lăng – Xương Giang', 'Phòng tuyến Bạch Đằng'],
      correct: 0,
      explain: 'Thực hiện kế sách "bảo toàn lực lượng" sáng suốt của Ngô Thì Nhậm, quân Tây Sơn chủ động rút lui lập phòng tuyến thủy bộ Tam Điệp (Ninh Bình) – Biện Sơn (Thanh Hóa).'
    },
    {
      category: 'Bất ngờ chiến lược',
      question: 'Đồn nào của quân Thanh bị quân Tây Sơn vây chặt và hạ gục trong đêm mùng 3 Tết Kỷ Dậu mà không tốn một phát súng?',
      options: ['Đồn Hà Hồi (Thường Tín, Hà Nội)', 'Đồn Ngọc Hồi', 'Đồn Đống Đa', 'Đồn Nam Dư'],
      correct: 0,
      explain: 'Đêm mùng 3 Tết Kỷ Dậu, quân Tây Sơn bí mật vây kín đồn Hà Hồi, bắc loa truyền lệnh dạ ran như trời gầm, quân Thanh trong đồn rụng rời kinh hãi xin hàng toàn bộ.'
    },
    {
      category: 'Chiến thuật công đồn',
      question: 'Trong trận đánh đồn Ngọc Hồi, nghĩa quân Tây Sơn đã sử dụng vật dụng gì để chống lại đạn pháo của giặc?',
      options: ['Ghép 20 mảnh ván lớn, bọc rơm ướt bên ngoài che chở cho toán xung kích', 'Dùng giáp sắt đúc dày nhiều lớp', 'Đào địa đạo ngầm dưới chân thành', 'Bắn pháo khói ngụy trang diện rộng'],
      correct: 0,
      explain: 'Quân Tây Sơn ghép các tấm ván lớn bọc rơm nhúng nước đẫm bên ngoài, mỗi tấm 20 người cầm đoản đao khiêng tiến lên, đạn lửa của quân Thanh bắn vào đều bị vô hiệu hóa.'
    },
    {
      category: 'Tướng giặc tự vẫn',
      question: 'Tướng giặc Thanh nào chỉ huy cứ điểm Khương Thượng (Đống Đa) đã phải thắt cổ tự tử trước sức tấn công vũ bão của Tây Sơn?',
      options: ['Sầm Nghi Đống', 'Tôn Sĩ Nghị', 'Ô Mã Nhi', 'Liễu Thăng'],
      correct: 0,
      explain: 'Đề đốc Điền Châu Sầm Nghi Đống chỉ huy đồn Đống Đa bị đạo quân Đô đốc Long tiêu diệt, cùng đường phải thắt cổ tự vẫn tại gò Đống Đa.'
    },
    {
      category: 'Bài hịch xuất quân',
      question: 'Câu nói bất hủ: "Đánh cho để dài tóc, Đánh cho để đen răng..." được trích từ văn kiện nào của vua Quang Trung?',
      options: ['Lời Hiểu Dụ tướng sĩ tại Nghệ An (1788)', 'Chiếu Cầu Hiền', 'Chiếu Khuyến Nông', 'Hịch Tướng Sĩ'],
      correct: 0,
      explain: 'Đây là Lời Hiểu Dụ tướng sĩ hào hùng của vua Quang Trung khi dừng chân tuyển binh tại Nghệ An tháng 12/1788 trước khi tiến quân ra Bắc.'
    },
    {
      category: 'Cải cách chữ viết',
      question: 'Cơ quan nào được vua Quang Trung thành lập để chuyên trách dịch sách chữ Hán sang chữ Nôm?',
      options: ['Viện Sùng Chính', 'Quốc Tử Giám', 'Hàn Lâm Viện', 'Đông Các đại học sĩ'],
      correct: 0,
      explain: 'Năm 1791, vua Quang Trung thành lập Viện Sùng Chính tại núi Nam Hoa (Hà Tĩnh) và cử La Sơn Phu Tử Nguyễn Thiếp làm Viện trưởng.'
    }
  ],
  'nang-cao': [
    {
      category: 'Chính sách ruộng đất',
      question: 'Chính sách kinh tế nào của vua Quang Trung nhằm phục hồi sản xuất nông nghiệp sau nhiều năm nội chiến tàn phá?',
      options: ['Ban hành "Chiếu Khuyến Nông" kêu gọi lưu dân về quê khai khẩn ruộng hoang', 'Áp dụng chính sách đồn điền quân đội', 'Thu hồi toàn bộ ruộng đất tư hữu thành đất công', 'Miễn thuế nông nghiệp vĩnh viễn'],
      correct: 0,
      explain: 'Năm 1789, vua Quang Trung ban hành "Chiếu Khuyến Nông", quy định lưu dân phải trở về làng cũ, ruộng hoang phải được khai khẩn trong vòng một năm, giúp mùa màng nhanh chóng tốt tươi.'
    },
    {
      category: 'Quản lý dân số',
      question: 'Tấm thẻ bằng gỗ khắc tên họ, quê quán mà triều đại Quang Trung áp dụng để quản lý đinh nam gọi là gì?',
      options: ['Thẻ Tín Bài', 'Thẻ Thân Bài', 'Hộ khẩu bài', 'Lệnh bài triều đình'],
      correct: 0,
      explain: 'Triều Quang Trung phát hành "Thẻ Tín Bài" có khắc chữ "Minh đức thịnh vượng", yêu cầu mọi người dân từ 18 tuổi trở lên phải mang theo để quản lý nhân khẩu và quân dịch.'
    },
    {
      category: 'Ngoại giao tài tình',
      question: 'Kế sách ngoại giao của vua Quang Trung với triều đình Mãn Thanh sau chiến thắng Kỷ Dậu 1789 được thể hiện qua hành động nào?',
      options: ['Cử người đóng giả vua Quang Trung sang Yên Kinh dự lễ bát tuần khánh thọ của vua Càn Long', 'Cắt đứt toàn bộ quan hệ thương mại vùng biên giới', 'Tiếp tục xua quân đánh chiếm toàn bộ đất Quảng Tây', 'Xin triều cống vàng bạc vô điều kiện'],
      correct: 0,
      explain: 'Vua Quang Trung cử người có ngoại hình giống mình (tướng Phạm Công Trị) đóng giả làm vua dẫn đầu đoàn sứ bộ sang bái kiến Càn Long, vừa giữ thể diện cho nhà Thanh vừa giữ vững phẩm giá và độc lập dân tộc.'
    },
    {
      category: 'Chiến thuật quân sự đỉnh cao',
      question: 'Vì sao vua Quang Trung chọn đồn Ngọc Hồi làm mục tiêu công phá chính diện then chốt thay vì đánh Thăng Long trước?',
      options: ['Ngọc Hồi là cứ điểm kiên cố nhất án ngữ cửa ngõ phía Nam, bẻ gãy đồn này sẽ làm sụp đổ toàn bộ hệ thống phòng thủ Thăng Long', 'Vì đồn Ngọc Hồi có ít quân canh gác nhất', 'Vì kho lương thảo chính của quân Thanh đặt tại Ngọc Hồi', 'Do quân Thanh tại Ngọc Hồi tự ý rút lui'],
      correct: 0,
      explain: 'Đồn Ngọc Hồi (Thanh Trì) là tiền đồn kiên cố nhất với chông bẫy liên hoàn. Phá tan "cánh cửa thép" Ngọc Hồi kết hợp đòn vu hồi Đống Đa tạo thế gọng kìm khiến toàn bộ quân Thanh tại Thăng Long hoảng loạn tan rã.'
    },
    {
      category: 'Tiền tệ thời Tây Sơn',
      question: 'Đồng tiền đồng do triều đại Hoàng đế Quang Trung cho đúc có dòng chữ gì?',
      options: ['Quang Trung Thông Bảo', 'Thái Đức Thông Bảo', 'Gia Long Thông Bảo', 'Minh Mạng Thông Bảo'],
      correct: 0,
      explain: 'Đồng tiền mang dòng chữ "Quang Trung Thông Bảo" được đúc bằng đồng tinh khiết, lưu hành rộng rãi giúp hoạt động giao thương buôn bán phát triển thịnh vượng.'
    },
    {
      category: 'Trận tuyến hải quân',
      question: 'Đạo quân thủy binh Tây Sơn trong chiến dịch Tết Kỷ Dậu 1789 do ai chỉ huy tiến vào sông Lục Đầu chia cắt đường rút lui của giặc?',
      options: ['Đô đốc Tuyết và Đô đốc Lộc', 'Đô đốc Bùi Thị Xuân', 'Đô đốc Ngô Văn Sở', 'Đô đốc Phan Văn Lân'],
      correct: 0,
      explain: 'Đạo quân thứ tư và thứ năm gồm thủy binh do Đô đốc Tuyết và Đô đốc Lộc chỉ huy vượt biển vào sông Lục Đầu (Hải Dương) tiêu diệt quân địch ở Phượng Nhãn và khóa chặt đường rút lui của quân Thanh.'
    },
    {
      category: 'Tư tưởng trọng dụng nhân tài',
      question: 'Văn kiện nổi tiếng nào của vua Quang Trung nhấn mạnh câu: "Dựng nước lấy việc học làm đầu, trị nước lấy nhân tài làm gốc"?',
      options: ['Chiếu Cầu Hiền (do Ngô Thì Nhậm soạn thảo theo ý vua)', 'Chiếu Khuyến Nông', 'Lệnh Tín Bài', 'Hịch Xuất Quân'],
      correct: 0,
      explain: 'Chiếu Cầu Hiền do danh sĩ Ngô Thì Nhậm chắp bút theo ý vua Quang Trung, tha thiết kêu gọi các văn thân, kẻ sĩ Bắc Hà ra gánh vác việc triều chính phụng sự nhân dân.'
    },
    {
      category: 'Kế sách rút quân Tam Điệp',
      question: 'Ai là người đã hiến kế cho Ngô Văn Sở tạm rút quân khỏi Thăng Long về Tam Điệp: "cho chúng ngủ trọ một đêm rồi đuổi đi"?',
      options: ['Ngô Thì Nhậm', 'Trần Văn Kỷ', 'Nguyễn Thiếp', 'Phan Huy Ích'],
      correct: 0,
      explain: 'Ngô Thì Nhậm đã đưa ra kế sách quân sự thiên tài: tạm rút quân về Tam Điệp – Biện Sơn để "bảo toàn lực lượng, kích thích tính kiêu ngạo của địch, chờ Chúa công ra Bắc sẽ đuổi chúng như đuổi chim muông".'
    },
    {
      category: 'Kế hoạch đối ngoại táo bạo',
      question: 'Trước khi qua đời, vua Quang Trung đang chuẩn bị kế hoạch chiến lược nào đối với biên cương phương Bắc?',
      options: ['Đòi lại hai tỉnh Quảng Đông, Quảng Tây và hỏi cưới công chúa Mãn Thanh', 'Ký hòa ước nhượng bộ lãnh thổ', 'Xâm chiếm vùng Vân Nam', 'Liên minh với đế quốc Anh tiến đánh Bắc Kinh'],
      correct: 0,
      explain: 'Sử liệu ghi nhận vua Quang Trung đã bí mật luyện tập thủy binh chiến hạm lớn, chuẩn bị biểu văn đòi lại đất Lưỡng Quảng vốn là lãnh thổ của người Việt cổ.'
    },
    {
      category: 'Đánh giá lịch sử',
      question: 'Sử gia hiện đại và quốc tế đánh giá thiên tài quân sự của vua Quang Trung tương đương với danh tướng nào của thế giới?',
      options: ['Napoléon Bonaparte và Alexandros Đại đế', 'Julius Caesar', 'Genghis Khan', 'George Washington'],
      correct: 0,
      explain: 'Nhiều nhà sử học ví tài năng hành quân chớp nhoáng, nghệ thuật tập trung hỏa lực và tấn công quyết đoán của Quang Trung tương đồng với danh tướng Napoléon Bonaparte của nước Pháp.'
    }
  ]
};

// --- 2. HỆ THỐNG TRÍ TUỆ NHÂN TẠO HỌC SỬ (AI ASSISTANT ENGINE) ---

const AI_KNOWLEDGE_BASE = [
  {
    keywords: ['nguyễn huệ', 'quang trung', 'tiểu sử', 'sinh năm', 'quê quán', 'quê', 'là ai', 'xuất thân'],
    response: `👑 **Vua Quang Trung (Nguyễn Huệ, 1753 – 1792)**, tên khai sinh là Hồ Thơm, là vị anh hùng dân tộc vĩ đại, nhà quân sự thiên tài và vị hoàng đế kiệt xuất của triều đại Tây Sơn.

✦ **Quê hương:** Vùng Tây Sơn, phủ Quy Nhơn (nay thuộc huyện Tây Sơn, tỉnh Bình Định).
✦ **Gia đình:** Em trai của Thái Đức hoàng đế Nguyễn Nhạc và anh của Đông Định vương Nguyễn Lữ.
✦ **Sự nghiệp:** Từ người khởi xướng phong trào nông dân áo vải, ông đã lần lượt đánh đổ các tập đoàn phong kiến cát cứ Nguyễn – Trịnh, đập tan 5 vạn quân xâm lược Xiêm (1785) và 29 vạn quân Mãn Thanh (1789), đặt nền móng thống nhất toàn vẹn lãnh thổ non sông.`
  },
  {
    keywords: ['rạch gầm', 'xoài mút', 'quân xiêm', 'thái lan', '1785', 'thủy chiến'],
    response: `🌊 **Chiến thắng Rạch Gầm – Xoài Mút (Đêm 19 rạng ngày 20/01/1785):**

✦ **Bối cảnh:** Nguyễn Ánh cầu viện vua Xiêm đưa 5 vạn quân và 300 chiến thuyền ồ ạt đánh chiếm miền Tây Nam Bộ.
✦ **Chiến thuật của Nguyễn Huệ:**
1. Chọn đoạn sông Tiền dài 6-7km có cù lao rậm rạp làm nơi giăng bẫy.
2. Dùng thuyền nhẹ giả thua nhử toàn bộ hạm đội giặc vào lòng sông đúng lúc nước triều rút mạnh.
3. Đại bác, hỏa hổ và thuyền chiến Tây Sơn từ hai nhánh sông bất ngờ khóa chặt hai đầu nã pháo dữ dội.
✦ **Kết quả:** Bắn chìm toàn bộ thuyền giặc, tiêu diệt gần 4 vạn quân Xiêm chỉ trong một đêm. Từ đó, người Xiêm "sợ Tây Sơn như sợ cọp".`
  },
  {
    keywords: ['ngọc hồi', 'đống đa', 'quân thanh', '1789', 'kỷ dậu', 'tết', 'mãn thanh', 'tôn sĩ nghị'],
    response: `⚡ **Đại phá 29 vạn quân Thanh – Đỉnh cao nghệ thuật quân sự thần tốc (Mùa xuân Kỷ Dậu 1789):**

✦ **Thời gian:** Chỉ vỏn vẹn trong 5 ngày đêm (từ đêm 30 Tết đến trưa mùng 5 Tết Kỷ Dậu).
✦ **Nét đặc sắc quân sự:**
1. **Hành quân thần tốc:** Từ Phú Xuân ra Tam Điệp rồi tiến thẳng Thăng Long với tốc độ kỷ lục bằng cách luân phiên cáng võng.
2. **Yếu tố bất ngờ:** Đánh vào đúng dịp Tết Nguyên Đán khi quân giặc đang say sưa men rượu và mất cảnh giác.
3. **Phối hợp hỏa lực:** Dùng voi chiến mang ống hỏa hổ thiêu rụi đồn lũy giặc; dùng ván bọc rơm ướt vô hiệu hóa tên đạn súng hỏa mai.
✦ **Kết quả:** Tôn Sĩ Nghị tháo chạy đứt cầu phao, tướng Sầm Nghi Đống tự vẫn tại gò Đống Đa, kinh thành Thăng Long được giải phóng hoàn toàn.`
  },
  {
    keywords: ['thần tốc', 'hành quân', 'bí quyết', 'nghệ thuật quân sự'],
    response: `🐎 **Bí quyết hành quân "Thần tốc" kinh điển của vua Quang Trung:**

1. **Tổ chức di chuyển ba người một nhóm:** Hai người khiêng một chiếc võng cáng một người nằm ngủ lấy sức, thay phiên nhau đi suốt ngày đêm không ngừng nghỉ.
2. **Kỷ luật thép & Động viên tinh thần:** Lời hiểu dụ tại Nghệ An khơi dậy lòng tự hào dân tộc ("Đánh cho để dài tóc, đánh cho để đen răng...").
3. **Hẹn ngày ăn Tết tại Thăng Long:** Cho quân ăn Tết sớm ngày 30 tháng Chạp, tạo niềm tin tất thắng mãnh liệt cho toàn thể ba quân tướng sĩ.`
  },
  {
    keywords: ['chữ nôm', 'văn hóa', 'giáo dục', 'chiếu khuyến nông', 'chiếu cầu hiền', 'cải cách'],
    response: `📜 **Các chính sách cải cách tiến bộ của Hoàng đế Quang Trung:**

✦ **Văn hóa – Giáo dục:** Đề cao chữ Nôm thành quốc ngữ chính thức trong thi cử và chiếu chỉ; thành lập **Viện Sùng Chính** do Nguyễn Thiếp phụ trách dịch kinh sách.
✦ **Kinh tế – Nông nghiệp:** Ban hành **Chiếu Khuyến Nông** giải quyết nạn đói, đưa lưu dân về làng phục hồi ruộng hoang; đúc tiền đồng **Quang Trung Thông Bảo** thúc đẩy thương mại.
✦ **Xã hội & An ninh:** Áp dụng **Thẻ Tín Bài** quản lý nhân khẩu và binh dịch chặt chẽ.
✦ **Ngoại giao:** Thi hành chính sách hòa hiếu mềm dẻo nhưng cương quyết giữ vững chủ quyền quốc gia với nhà Thanh.`
  },
  {
    keywords: ['bùi thị xuân', 'ngô thì nhậm', 'nguyễn thiếp', 'tướng', 'quân thần'],
    response: `⚔️ **Các bậc hiền tài & danh tướng kiệt xuất đồng hành cùng Quang Trung:**

✦ **Ngô Thì Nhậm:** Danh sĩ tài ba hiến kế lui binh chiến lược về phòng tuyến Tam Điệp – Biện Sơn, linh hồn trong các chính sách ngoại giao với nhà Thanh.
✦ **Đô đốc Bùi Thị Xuân:** Nữ tướng anh hùng trực tiếp chỉ huy đội voi chiến cảm tử oanh liệt tại đồn Ngọc Hồi.
✦ **La Sơn Phu Tử Nguyễn Thiếp:** Bậc đại Nho thanh cao được vua Quang Trung 3 lần viết thư cầu hiền, phụ trách Viện Sùng Chính chấn hưng nền học thuật nước nhà.
✦ **Trần Quang Diệu, Ngô Văn Sở, Phan Văn Lân:** Những danh tướng bách chiến bách thắng của phong trào Tây Sơn.`
  }
];

// --- 3. ĐIỀU HƯỚNG VÀ VẬN HÀNH TRANG WEB (ROUTING & UI CONTROLLER) ---

// Chuyển trang dạng Single Page Application (SPA)
function openPage(pageId) {
  // Ẩn tất cả các trang
  const pages = document.querySelectorAll('.sub-page, #home-page');
  pages.forEach(p => {
    p.classList.remove('active-page');
    p.style.display = 'none';
  });

  // Hiển thị trang được chọn
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
    // Ép reflow để kích hoạt animation
    void targetPage.offsetWidth;
    targetPage.classList.add('active-page');
  }

  // Cập nhật trạng thái active trên navbar
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${pageId}`) {
      link.classList.add('active');
    }
  });

  // Đóng menu mobile nếu đang mở
  const navContainer = document.querySelector('.nav-links');
  if (navContainer) navContainer.classList.remove('mobile-open');

  // Cuộn mượt lên đầu trang
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Phát âm thanh nhấn nhẹ
  playChimeSound(600, 'sine', 0.05);
}

// Quay về trang chủ
function showHome() {
  openPage('home-page');
  const homeLink = document.querySelector('.nav-links a[href="#trang-chu"]');
  if (homeLink) homeLink.classList.add('active');
}

// Bật/tắt menu trên màn hình điện thoại
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('mobile-open');
  }
}

// --- 4. HỆ THỐNG ÂM THANH & THUYẾT MINH GIỌNG NÓI AI ---

let audioCtx = null;
let isAudioEnabled = true;

function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
}

// Phát âm thanh hiệu ứng (Web Audio API không cần tải file ngoài)
function playChimeSound(freq = 520, type = 'sine', duration = 0.15) {
  if (!isAudioEnabled) return;
  try {
    initAudio();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Trình duyệt chặn audio
  }
}

// Bật/tắt âm thanh giao diện
function toggleAudioMute() {
  isAudioEnabled = !isAudioEnabled;
  const btn = document.getElementById('audioToggleBtn');
  if (btn) {
    btn.innerHTML = isAudioEnabled ? '🔔 Âm thanh: Bật' : '🔕 Âm thanh: Tắt';
  }
  if (isAudioEnabled) playChimeSound(650, 'triangle', 0.2);
}

// Thuyết minh bằng giọng nói AI (Text-to-Speech Web Speech API tiếng Việt)
function narrateText(text) {
  if (!('speechSynthesis' in window)) {
    alert('Trình duyệt của bạn không hỗ trợ tính năng thuyết minh giọng nói tự động.');
    return;
  }

  window.speechSynthesis.cancel(); // Dừng câu cũ
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.95; // Tốc độ đĩnh đạc trang trọng
  utterance.pitch = 1.0;

  // Tìm giọng tiếng Việt nếu có
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VIE'));
  if (viVoice) utterance.voice = viVoice;

  window.speechSynthesis.speak(utterance);
  playChimeSound(440, 'sine', 0.1);
}

// --- 5. LOGIC SA BÀN CHIẾN TRẬN ---

function showBattle(battleKey, btnEl) {
  const data = BATTLES_DATA[battleKey];
  if (!data) return;

  // Cập nhật tab active
  const tabs = document.querySelectorAll('.battle-nav-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const container = document.getElementById('battle-content');
  if (!container) return;

  // Hiệu ứng mờ dần rồi đổi nội dung
  container.style.opacity = '0';
  setTimeout(() => {
    container.innerHTML = `
      <div class="battle-header-info">
        <div>
          <div class="battle-year-tag">${data.year}</div>
          <h3>${data.title}</h3>
        </div>
        <button class="btn-gold-outline" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;" onclick="narrateText('${data.title}. ${data.lead}')">
          🔊 Nghe thuyết minh
        </button>
      </div>
      <p class="battle-lead-text">${data.lead}</p>
      <div class="battle-step-grid" style="margin-top: 2rem;">
        ${data.steps.map((st, idx) => `
          <div class="battle-step-item">
            <span class="step-label">${st.label}</span>
            <h4>${st.title}</h4>
            <p>${st.desc}</p>
          </div>
        `).join('')}
      </div>
      <div class="tactical-highlight-box">
        <div class="tactical-content">
          <h5>⚡ ${data.tactic.title}</h5>
          <p>${data.tactic.desc}</p>
        </div>
      </div>
    `;
    container.style.transition = 'opacity 0.4s ease';
    container.style.opacity = '1';
  }, 200);

  playChimeSound(500, 'sine', 0.1);
}

// --- 6. LOGIC BẢO TÀNG SỐ & MODAL LIGHTBOX ---

let exploredArtifacts = new Set();

// Khởi tạo hiển thị bảo tàng
function initMuseum() {
  const grid = document.getElementById('museum-items-grid');
  if (!grid) return;

  // Lấy dữ liệu đã lưu từ LocalStorage
  try {
    const saved = localStorage.getItem('explored_artifacts_su');
    if (saved) exploredArtifacts = new Set(JSON.parse(saved));
  } catch (e) {}

  grid.innerHTML = MUSEUM_ITEMS.map((item, index) => `
    <article class="museum-card" onclick="openMuseumModal(${index})">
      <div class="museum-thumb-box">
        <img class="museum-photo" src="${item.img}" alt="${item.title}" loading="lazy">
        <span class="museum-category-pill">${item.category}</span>
      </div>
      <div class="museum-card-content">
        <div>
          <h3>${item.title}</h3>
          <p class="item-sub">${item.sub}</p>
          <p class="item-desc">${item.desc.substring(0, 95)}...</p>
        </div>
        <div class="museum-card-footer">
          <span>${item.source.split('(')[0]}</span>
          <span class="museum-view-btn">Xem chi tiết →</span>
        </div>
      </div>
    </article>
  `).join('');

  updateMuseumProgress();
}

function openMuseumModal(index) {
  const item = MUSEUM_ITEMS[index];
  if (!item) return;

  const modal = document.getElementById('museum-modal');
  const body = document.getElementById('museum-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal-img-wrapper">
      <img src="${item.img}" alt="${item.title}">
    </div>
    <div class="modal-details">
      <div>
        <span class="step-label">${item.category}</span>
        <h3>${item.title}</h3>
        <p class="modal-sub">${item.sub}</p>
        <p class="modal-text">${item.details}</p>
      </div>
      <div>
        <div class="modal-meta-box" style="margin-bottom: 1rem;">
          <strong>Nguồn gốc sử liệu:</strong> ${item.source}
        </div>
        <div style="display: flex; gap: 0.8rem;">
          <button class="btn-gold-outline" style="flex: 1;" onclick="narrateText('${item.title}. ${item.details}')">
            🔊 Nghe thuyết minh
          </button>
          <button class="btn-royal" style="flex: 1;" onclick="closeMuseumModal()">
            Đóng
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');

  // Đánh dấu đã khám phá hiện vật
  exploredArtifacts.add(index);
  try {
    localStorage.setItem('explored_artifacts_su', JSON.stringify([...exploredArtifacts]));
  } catch (e) {}
  updateMuseumProgress();

  playChimeSound(680, 'sine', 0.15);
}

function closeMuseumModal() {
  const modal = document.getElementById('museum-modal');
  if (modal) modal.classList.remove('active');
}

function updateMuseumProgress() {
  const total = MUSEUM_ITEMS.length;
  const count = exploredArtifacts.size;
  const percent = Math.min(100, Math.round((count / total) * 100));

  const fillEl = document.getElementById('museum-progress-fill');
  const textEl = document.getElementById('museum-progress-text');
  if (fillEl) fillEl.style.width = `${percent}%`;
  if (textEl) textEl.innerText = `Đã khám phá ${count}/${total} hiện vật (${percent}%)`;
}

// --- 7. TRẠM AI HỌC SỬ & BỘ KIỂM CHỨNG TIN GIẢ ---

// Xử lý gửi tin nhắn Chatbot AI
function handleUserChat() {
  const inputEl = document.getElementById('ai-chat-input');
  if (!inputEl) return;
  const question = inputEl.value.trim();
  if (!question) return;

  const chatContainer = document.getElementById('ai-chat-messages');
  if (!chatContainer) return;

  // Thêm tin nhắn của User
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.innerText = question;
  chatContainer.appendChild(userBubble);
  inputEl.value = '';

  // Cuộn xuống
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Tạo bong bóng phản hồi của AI (mô phỏng suy nghĩ)
  const botBubble = document.createElement('div');
  botBubble.className = 'chat-bubble bot';
  botBubble.innerHTML = '<em>Sử Quan AI đang tra cứu chính sử...</em>';
  chatContainer.appendChild(botBubble);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  playChimeSound(480, 'sine', 0.08);

  setTimeout(() => {
    const reply = searchAIKnowledge(question);
    botBubble.innerHTML = reply.replace(/\n/g, '<br>');
    chatContainer.scrollTop = chatContainer.scrollHeight;
    playChimeSound(620, 'triangle', 0.15);
  }, 500);
}

// Tra cứu tri thức AI
function searchAIKnowledge(query) {
  const lowerQuery = query.toLowerCase();

  // Tìm trong ngân hàng tri thức theo từ khóa
  for (const item of AI_KNOWLEDGE_BASE) {
    if (item.keywords.some(kw => lowerQuery.includes(kw))) {
      return item.response;
    }
  }

  // Câu trả lời thông minh mặc định nếu chưa khớp từ khóa cụ thể
  return `📜 **Sử Quan AI Tây Sơn xin giải đáp:**

Câu hỏi về "${query}" là một chủ đề rất ý nghĩa. Theo các nguồn sử liệu chính thống như *Đại Nam Thực Lục*, *Hoàng Lê Nhất Thống Chí* và *Việt Nam Sử Lược*:

✦ Triều đại Tây Sơn do ba anh em Nguyễn Nhạc, Nguyễn Huệ và Nguyễn Lữ lãnh đạo đã lập nên những chiến công hiển hách bậc nhất thế kỷ XVIII.
✦ Hoàng đế Quang Trung là biểu tượng rực rỡ của tài thao lược bách chiến bách thắng, tấm lòng yêu nước thương dân và ý chí bảo vệ độc lập tự chủ thiêng liêng.

👉 *Bạn có thể chọn các câu hỏi gợi ý bên dưới hoặc khám phá thêm chi tiết tại Trạm NotebookLM của dự án!*`;
}

// Chọn nhanh câu hỏi mẫu
function sendQuickPrompt(promptText) {
  const inputEl = document.getElementById('ai-chat-input');
  if (inputEl) {
    inputEl.value = promptText;
    handleUserChat();
  }
}

// Bộ Kiểm chứng Sử liệu / Chống Tin giả (Fact-Checker)
function runFactCheck(statementId) {
  const resultBox = document.getElementById('fact-check-result');
  if (!resultBox) return;

  const data = FACT_CHECK_DATABASE[statementId];
  if (!data) {
    resultBox.innerHTML = `
      <div style="text-align: center; color: var(--text-muted);">
        <p>Vui lòng chọn một nhận định lịch sử từ danh sách phía trên để AI tiến hành đối chiếu với chính sử.</p>
      </div>
    `;
    return;
  }

  resultBox.innerHTML = `
    <div class="fact-status-badge ${data.status}">
      ${data.status === 'correct' ? '✓' : '✗'} ${data.statusText}
    </div>
    <p class="fact-explanation-text">${data.explanation}</p>
    <span class="fact-source-citation">📚 Nguồn căn cứ: ${data.source}</span>
  `;

  playChimeSound(data.status === 'correct' ? 700 : 350, 'sine', 0.18);
}

// --- 8. ĐẤU TRƯỜNG KIẾN THỨC (GAMIFIED QUIZ ARENA) ---

let currentQuizLevel = 'co-ban';
let currentQuestionIndex = 0;
let currentScore = 0;
let currentStreak = 0;
let quizQuestionsList = [];

function startQuiz(levelKey) {
  currentQuizLevel = levelKey;
  quizQuestionsList = [...(QUIZ_QUESTIONS[levelKey] || QUIZ_QUESTIONS['co-ban'])];
  currentQuestionIndex = 0;
  currentScore = 0;
  currentStreak = 0;

  // Chuyển màn hình
  const picker = document.getElementById('level-picker');
  const game = document.getElementById('quiz-game');
  const result = document.getElementById('quiz-result');

  if (picker) picker.style.display = 'none';
  if (result) result.style.display = 'none';
  if (game) game.style.display = 'block';

  renderCurrentQuestion();
}

function showLevelPicker() {
  const picker = document.getElementById('level-picker');
  const game = document.getElementById('quiz-game');
  const result = document.getElementById('quiz-result');

  if (picker) picker.style.display = 'grid';
  if (game) game.style.display = 'none';
  if (result) result.style.display = 'none';
}

function renderCurrentQuestion() {
  const qData = quizQuestionsList[currentQuestionIndex];
  if (!qData) {
    finishQuiz();
    return;
  }

  // Cập nhật thông số
  const progressEl = document.getElementById('quiz-progress');
  const scoreEl = document.getElementById('quiz-score');
  const catEl = document.getElementById('quiz-category');
  const titleEl = document.getElementById('quiz-question');
  const optsContainer = document.getElementById('quiz-options');
  const feedbackEl = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('next-question');

  if (progressEl) progressEl.innerText = `Câu ${currentQuestionIndex + 1} / ${quizQuestionsList.length}`;
  if (scoreEl) scoreEl.innerText = `Điểm: ${currentScore} ⭐ (Chuỗi: ${currentStreak} 🔥)`;
  if (catEl) catEl.innerText = qData.category;
  if (titleEl) titleEl.innerText = qData.question;
  if (feedbackEl) feedbackEl.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';

  // Render các đáp án A, B, C, D
  const prefixes = ['A', 'B', 'C', 'D'];
  optsContainer.innerHTML = qData.options.map((opt, idx) => `
    <button class="quiz-option-btn" onclick="selectQuizAnswer(${idx}, this)">
      <span class="opt-prefix">${prefixes[idx]}</span>
      <span>${opt}</span>
    </button>
  `).join('');
}

function selectQuizAnswer(selectedIndex, btnEl) {
  const qData = quizQuestionsList[currentQuestionIndex];
  if (!qData) return;

  // Khóa tất cả các nút đáp án
  const allBtns = document.querySelectorAll('.quiz-option-btn');
  allBtns.forEach(b => b.classList.add('disabled'));

  const feedbackEl = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('next-question');

  if (selectedIndex === qData.correct) {
    // Trả lời đúng
    btnEl.classList.add('correct');
    currentScore += 10;
    currentStreak += 1;
    playChimeSound(750, 'sine', 0.2);

    if (feedbackEl) {
      feedbackEl.style.display = 'block';
      feedbackEl.innerHTML = `<p><strong style="color: var(--success);">✓ Chính xác tuyệt vời!</strong> ${qData.explain}</p>`;
    }
  } else {
    // Trả lời sai
    btnEl.classList.add('wrong');
    currentStreak = 0;
    // Highlight câu đúng
    if (allBtns[qData.correct]) allBtns[qData.correct].classList.add('correct');
    playChimeSound(280, 'sawtooth', 0.25);

    if (feedbackEl) {
      feedbackEl.style.display = 'block';
      feedbackEl.innerHTML = `<p><strong style="color: var(--danger);">✗ Chưa chính xác!</strong> ${qData.explain}</p>`;
    }
  }

  // Cập nhật lại điểm số ngay
  const scoreEl = document.getElementById('quiz-score');
  if (scoreEl) scoreEl.innerText = `Điểm: ${currentScore} ⭐ (Chuỗi: ${currentStreak} 🔥)`;

  // Hiện nút câu tiếp theo
  if (nextBtn) nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestionsList.length) {
    renderCurrentQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const game = document.getElementById('quiz-game');
  const result = document.getElementById('quiz-result');

  if (game) game.style.display = 'none';
  if (result) result.style.display = 'block';

  const maxScore = quizQuestionsList.length * 10;
  const percent = Math.round((currentScore / maxScore) * 100);

  const finalScoreEl = document.getElementById('final-score');
  const finalMsgEl = document.getElementById('final-message');

  if (finalScoreEl) finalScoreEl.innerText = `${currentScore} / ${maxScore} Điểm (${percent}%)`;

  let rankMessage = '';
  if (percent >= 90) {
    rankMessage = '🏆 Xuất sắc phi thường! Bạn xứng đáng nhận danh hiệu "Đại Tướng Quân Giữ Sử Tây Sơn", am hiểu sâu sắc về người anh hùng áo vải Nguyễn Huệ!';
    launchVictoryConfetti();
  } else if (percent >= 70) {
    rankMessage = '🎖️ Rất tốt! Bạn nắm rất vững các mốc son lịch sử và chiến thuật quân sự của vua Quang Trung.';
    launchVictoryConfetti();
  } else {
    rankMessage = '📖 Hành trình khám phá rất đáng khích lệ! Hãy ghé thăm Dòng thời gian và Bảo tàng số để ôn luyện thêm và chinh phục điểm số cao hơn nhé!';
  }

  if (finalMsgEl) finalMsgEl.innerText = rankMessage;
  playChimeSound(800, 'triangle', 0.4);
}

// Hiệu ứng pháo hoa chúc mừng (Canvas Confetti đơn giản không cần thư viện)
function launchVictoryConfetti() {
  try {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#D4AF37', '#B31B1B', '#F5C542', '#10B981', '#FFF'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.5) * 18 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }

    let animationId;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3; // trọng lực
        p.alpha -= p.decay;
        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
          ctx.restore();
        }
      });
      if (alive) {
        animationId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationId);
        canvas.remove();
      }
    }
    render();
  } catch (e) {}
}

// --- 9. GÓC TRẢI NGHIỆM & KHẢO SÁT DỮ LIỆU KHKT ---

let selectedRatingStars = 5;

function selectRatingStar(rating) {
  selectedRatingStars = rating;
  const stars = document.querySelectorAll('.star-rating-box .star-icon');
  stars.forEach((s, idx) => {
    if (idx < rating) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
}

function handleFeedbackSubmit(e) {
  e.preventDefault();
  const nameEl = document.getElementById('feedback-name');
  const textEl = document.getElementById('feedback-text');

  const name = nameEl ? nameEl.value.trim() : 'Học sinh ẩn danh';
  const text = textEl ? textEl.value.trim() : '';

  if (!text) {
    alert('Vui lòng nhập đôi dòng cảm nhận của bạn.');
    return;
  }

  // Thêm vào danh sách cảm nhận (LocalStorage)
  const newReview = {
    name: name || 'Học sinh trải nghiệm',
    stars: selectedRatingStars,
    text: text,
    date: 'Vừa xong'
  };

  let reviews = [];
  try {
    const saved = localStorage.getItem('khkt_reviews_su');
    if (saved) reviews = JSON.parse(saved);
  } catch (err) {}

  reviews.unshift(newReview);
  try {
    localStorage.setItem('khkt_reviews_su', JSON.stringify(reviews));
  } catch (err) {}

  alert('Cảm ơn bạn rất nhiều! Ý kiến đóng góp quý báu của bạn đã được ghi nhận vào báo cáo thực nghiệm Cuộc thi KHKT.');
  if (textEl) textEl.value = '';
  renderReviewsList();
  playChimeSound(600, 'sine', 0.2);
}

function renderReviewsList() {
  const container = document.getElementById('recent-reviews-container');
  if (!container) return;

  // Dữ liệu mẫu thực tế ban đầu
  let reviews = [
    { name: 'Nguyễn Minh Tuấn (Lớp 11A1)', stars: 5, text: 'Web giao diện rất đẹp, hào hùng đúng chất sử thi Tây Sơn. Nhờ trạm AI và sa bàn trận đánh mà em dễ dàng ghi nhớ chiến dịch Ngọc Hồi Đống Đa!', date: 'Hôm nay' },
    { name: 'Trần Thị Mai Phương (Lớp 12 Văn)', stars: 5, text: 'Bộ kiểm chứng tin giả rất độc đáo và khoa học! Không ngờ việc học sử lại trở nên trực quan và cuốn hút đến vậy.', date: 'Hôm qua' },
    { name: 'Lê Hoàng Hải (Lớp 10 Tin)', stars: 5, text: 'Hệ thống câu hỏi đố vui rất hay, có giải thích sử liệu chi tiết. Chúc nhóm đạt giải cao trong cuộc thi KHKT sắp tới!', date: '3 ngày trước' }
  ];

  try {
    const saved = localStorage.getItem('khkt_reviews_su');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) reviews = parsed;
    }
  } catch (err) {}

  container.innerHTML = reviews.slice(0, 5).map(rev => `
    <div class="review-item">
      <div class="review-header">
        <span class="review-author">${rev.name}</span>
        <span class="review-stars">${'★'.repeat(rev.stars)}${'☆'.repeat(5 - rev.stars)}</span>
      </div>
      <p class="review-text">${rev.text}</p>
    </div>
  `).join('');
}

// --- 10. KHỞI TẠO TOÀN DIỆN KHI TRANG TẢI XONG ---

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo Bảo tàng số
  initMuseum();

  // 2. Khởi tạo Sa bàn trận đánh đầu tiên
  showBattle('rach-gam', document.querySelector('.battle-nav-tab'));

  // 3. Khởi tạo Đánh giá cảm nhận
  renderReviewsList();

  // 4. Lắng nghe phím Enter trong ô Chat AI
  const aiInput = document.getElementById('ai-chat-input');
  if (aiInput) {
    aiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleUserChat();
      }
    });
  }

  // 5. Kiểm tra hash URL để mở trang tương ứng
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    openPage(hash);
  } else {
    showHome();
  }
});
