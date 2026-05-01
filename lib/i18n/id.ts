import { mentorProfiles, programFormLinks } from './shared'
import type { SiteContent } from './types'

export const id: SiteContent = {
  nav: {
    home: 'Beranda',
    about: 'Tentang Kami',
    programs: 'Kelas & Program',
    mentors: 'Mentor',
    contact: 'Kontak Informasi'
  },
  hero: {
    label: 'Platform Mentoring Mahasiswa Indonesia',
    headlineTop: "Let's Grow",
    headlineBottom: 'To Be',
    highlightedWord: 'Successful',
    description:
      'Sikola Indonesia adalah platform bimbingan yang dipersonalisasi untuk membantu mahasiswa memenangkan kompetisi, meraih beasiswa, dan mempersiapkan langkah karier dengan lebih percaya diri.',
    ctaPrimary: 'Lihat Program',
    ctaSecondary: 'Hubungi Kami',
    stats: [
      { value: '50+', label: 'Prestasi Mentor' },
      { value: '18', label: 'Kelas Tersedia' },
      { value: '5', label: 'Program Sosial' }
    ]
  },
  about: {
    label: 'Tentang Kami',
    heading: 'Sikola Indonesia',
    intro:
      'Sikola Indonesia hadir untuk menjawab kebutuhan mahasiswa akan ruang pembinaan yang lebih personal, terarah, dan mudah dijangkau dalam menyiapkan diri menghadapi kompetisi, beasiswa, dan langkah karier.',
    introCard:
      'Sikola Indonesia lahir dari keresahan nyata terhadap minimnya ruang pembinaan yang personal, terarah, dan mudah diakses bagi mahasiswa Indonesia yang ingin berkembang melalui kompetisi, beasiswa, dan kesiapan karier.',
    launchBadge: '12 Januari 2025',
    launchLabel: 'Peluncuran',
    launchDate: 'Diluncurkan pada 12 Januari 2025, Sikola hadir dengan semangat baru untuk menjembatani potensi mahasiswa dengan pembinaan yang relevan dan berdampak.',
    meaning:
      'Kata "Sikola" berasal dari bahasa Makassar yang berarti sekolah atau tempat belajar, sekaligus menjadi simbol ruang tumbuh yang dekat, hangat, dan memberdayakan.',
    founderLabel: 'Pendiri & CEO',
    founderName: 'Rifal, S.E',
    founderUniversity: 'Universitas Hasanuddin',
    vision: {
      label: 'Visi',
      heading: 'Visi',
      content:
        'Menjadi platform pembelajaran berbasis personalisasi terdepan di Indonesia yang membuka akses pembinaan berkualitas bagi mahasiswa untuk berprestasi, berkontribusi, dan tumbuh secara berkelanjutan.'
    },
    mission: {
      label: 'Misi',
      heading: 'Misi',
      points: [
        'Menyediakan mentoring yang relevan dan terukur sesuai kebutuhan peserta.',
        'Membangun ekosistem belajar yang suportif, inklusif, dan kolaboratif.',
        'Mendampingi mahasiswa dalam kompetisi, beasiswa, dan pengembangan karier.',
        'Mendorong peserta menghasilkan karya, prestasi, dan dampak nyata.',
        'Menciptakan ruang sinergi antara mentor, peserta, komunitas, dan mitra.'
      ]
    },
    values: {
      label: 'Nilai Inti',
      heading: 'Nilai Inti',
      items: ['Competency', 'Empowerment', 'Integrity', 'Innovation', 'Synergy & Collaboration']
    }
  },
  programs: {
    label: 'Kelas & Program',
    heading: 'Mulai Perjalananmu dan Sukses Bersama Sikola Indonesia',
    subtext: 'Dapatkan bimbingan yang tepat untuk masa depanmu',
    searchPlaceholder: 'Cari Program...',
    registerNow: 'Daftar Sekarang',
    tabs: {
      mentoring: 'Kelas Mentoring',
      social: 'Program Sosial'
    },
    mentoringHeading: 'Mentoring yang Disesuaikan dengan Tujuanmu',
    socialHeading: 'Program Pengembangan & Akses Kesempatan',
    noResults: 'Program yang kamu cari belum ditemukan.',
    categoryLabels: {
      lomba: 'Lomba',
      beasiswa: 'Beasiswa',
      karir: 'Karier',
      social: 'Program Sosial'
    },
    mentoring: [
      {
        title: 'Mentoring Lomba Business Plan',
        icon: '📊',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Program menyusun proposal bisnis komprehensif, inovatif, dan kompetitif dari validasi ide hingga pitch deck standar nasional maupun internasional.'
      },
      {
        title: 'Mentoring Lomba BMC',
        icon: '🗺️',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Penyusunan Business Model Canvas yang strategis: value proposition, segmentasi pasar, serta model bisnis yang layak dan scalable.'
      },
      {
        title: 'Mentoring Presentasi Kompetisi',
        icon: '🎤',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Meningkatkan public speaking, alur presentasi, desain slide profesional, storytelling, dan cara menjawab pertanyaan juri dengan meyakinkan.'
      },
      {
        title: 'Mentoring Lomba Poster',
        icon: '🎨',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Merancang poster kompetisi yang menarik secara visual dan kuat secara substansi melalui konsep, komposisi, warna, dan komunikasi pesan.'
      },
      {
        title: 'Mentoring Lomba Esai Inovasi/Ilmiah',
        icon: '✍️',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Menulis esai kritis, sistematis, dan berbasis solusi: mulai dari pemilihan topik, argumen kuat, data relevan, hingga teknik penulisan standar lomba.'
      },
      {
        title: 'Mentoring Lomba Karya Tulis Ilmiah (KTI)',
        icon: '🔬',
        category: 'lomba',
        link: programFormLinks.lomba,
        description:
          'Penyusunan KTI yang sistematis berbasis riset: topik, latar belakang, metodologi, sampai penyempurnaan naskah sesuai standar kompetisi.'
      },
      {
        title: 'Mentoring Beasiswa Unggulan (BU)',
        icon: '🏆',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Persiapan seleksi Beasiswa Unggulan: esai yang kuat, profil akademik dan non-akademik, serta strategi menghadapi setiap tahapan seleksi.'
      },
      {
        title: 'Mentoring Beasiswa Tanoto Foundation',
        icon: '🌟',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Persiapan seleksi Tanoto Foundation melalui personal branding, esai yang impactful, dan simulasi wawancara berbasis pengalaman nyata.'
      },
      {
        title: 'Mentoring Beasiswa Bank Indonesia',
        icon: '🏦',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Persiapan seleksi BI mencakup berkas administrasi, wawasan kebanksentralan, simulasi wawancara, dan tes seleksi.'
      },
      {
        title: 'Mentoring Beasiswa Glow & Lovely Scholarship',
        icon: '💫',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Persiapan Glow & Lovely Scholarship dengan esai inspiratif, visi kontribusi sosial, dan narasi diri yang autentik.'
      },
      {
        title: 'Mentoring Beasiswa Bakti Nusa',
        icon: '🌿',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Pengembangan profil kepemimpinan dan kontribusi sosial untuk seleksi Bakti Nusa melalui esai, nilai diri, dan wawancara.'
      },
      {
        title: 'Mentoring Beasiswa Djarum Plus',
        icon: '🎖️',
        category: 'beasiswa',
        link: programFormLinks.beasiswa,
        description:
          'Persiapan Djarum Plus: esai kuat, soft skills, tes administrasi, tes kemampuan, dan wawancara komprehensif.'
      },
      {
        title: 'Mentoring CV Profesional Student',
        icon: '📄',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Penyusunan CV yang terstruktur, relevan, dan berstandar industri untuk menonjolkan pengalaman, pencapaian, dan kemampuan secara efektif.'
      },
      {
        title: 'Mentoring Portofolio',
        icon: '🗂️',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Menyusun portofolio yang representatif dan bernilai jual melalui karya, proyek, dan pencapaian profesional sesuai bidang.'
      },
      {
        title: 'Mentoring Interview Magang/Kerja',
        icon: '💼',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Meningkatkan kesiapan wawancara dengan jawaban yang terstruktur, percaya diri, dan teknik komunikasi yang lebih efektif.'
      },
      {
        title: 'Diskusi Karier: Management Trainee (MT)',
        icon: '🏢',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Mengenal jalur karier MT: tahapan seleksi, kompetensi yang dibutuhkan, dan strategi untuk meningkatkan peluang lolos.'
      },
      {
        title: 'Diskusi Karier: PCPM Bank Indonesia',
        icon: '🏛️',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Persiapan PCPM BI: proses seleksi, materi ujian, dan strategi menghadapi setiap tahapan secara terarah.'
      },
      {
        title: 'Diskusi Karier: PCS OJK',
        icon: '⚖️',
        category: 'karir',
        link: programFormLinks.karir,
        description:
          'Persiapan PCS OJK: standar seleksi, kompetensi yang dinilai, dan strategi untuk lolos di setiap tahap.'
      }
    ],
    social: [
      {
        title: 'Sikola Competition Scholarship',
        icon: '🎗️',
        category: 'social',
        link: programFormLinks.scholarship,
        description:
          'Dukungan bagi mahasiswa berprestasi dengan keterbatasan akses pembinaan. Peserta terpilih mendapat mentoring intensif untuk kompetisi.'
      },
      {
        title: 'Sikola Talks & Webinar',
        icon: '🎙️',
        category: 'social',
        link: programFormLinks.talks,
        description:
          'Sesi berbagi wawasan melalui talkshow dan webinar bersama narasumber inspiratif tentang kompetisi, beasiswa, dan karier.'
      },
      {
        title: 'Sikola Internship eXperience',
        icon: '🏗️',
        category: 'social',
        link: programFormLinks.internship,
        description:
          'Kesempatan magang di Sikola Indonesia untuk terlibat dalam proyek nyata, mengembangkan keterampilan praktis, dan membangun portofolio relevan.'
      },
      {
        title: 'Sikola Open Mentor',
        icon: '🧑‍🏫',
        category: 'social',
        link: programFormLinks.mentor,
        description:
          'Peluang bagi individu berprestasi untuk bergabung sebagai mentor, membimbing peserta, dan memberi dampak nyata.'
      },
      {
        title: 'Sikola Open Collaboration',
        icon: '🤝',
        category: 'social',
        link: programFormLinks.collaboration,
        description:
          'Program kolaborasi bagi organisasi, komunitas, atau institusi yang ingin bersinergi dengan Sikola Indonesia.'
      }
    ]
  },
  mentors: {
    label: 'Mentor',
    heading: 'Mentor Sikola Indonesia',
    subtext: 'Dibimbing oleh mentor berprestasi dengan rekam jejak kemenangan nyata',
    achievementLabel: 'Prestasi',
    showMore: 'Lihat Selengkapnya',
    showLess: 'Sembunyikan',
    items: mentorProfiles
  },
  contact: {
    heading: 'Hubungi Kami',
    subtext: 'Kami siap membantu Anda. Hubungi kami dengan pertanyaan apa pun.',
    emailLabel: 'Email',
    phoneLabel: 'Telepon / WhatsApp',
    addressLabel: 'Alamat',
    whatsappChannelLabel: 'Saluran WhatsApp Sikola',
    whatsappDescription:
      'Dapatkan info program, jadwal kelas, dan pengumuman terbaru langsung dari kanal resmi kami.',
    socialHeading: 'Ikuti Kami',
    whatsappButton: 'Gabung Sekarang',
    socialButtons: {
      instagram: 'Instagram',
      tiktok: 'TikTok',
      linkedin: 'LinkedIn'
    },
    faqLabel: 'FAQ',
    faqHeading: 'Pertanyaan Umum (FAQ)',
    faq: [
      {
        question: 'Bagaimana cara mendaftar program?',
        answer:
          'Klik tombol Program Utama, cari kelas atau program yang dibutuhkan, klik Daftar Sekarang, isi formulir pendaftaran, lalu konfirmasi ke admin.'
      },
      {
        question: 'Berapa biaya untuk mengikuti kelas mentoring?',
        answer:
          'Biaya kelas mentoring bersifat relatif dan tercantum pada formulir pendaftaran kelas mentoring masing-masing.'
      },
      {
        question: 'Apakah program sosial dapat diakses oleh siapa saja?',
        answer:
          'Ya, semua program sosial dapat diakses siapa saja selama memenuhi kriteria yang ditentukan.'
      }
    ]
  },
  footer: {
    tagline: "Let's Grow To Be Successful",
    quickLinksHeading: 'Tautan Cepat',
    contactHeading: 'Kontak',
    copyright: '© 2025 Sikola Indonesia. Seluruh hak dilindungi. | Dibuat dengan cinta untuk mahasiswa Indonesia'
  }
}
