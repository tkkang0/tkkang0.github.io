type TimelineItem = {
  date: string;
  title: string;
  place?: string;
  detail?: string;
};

const publications = [
  {
    year: "2025",
    venue: "ISMRM-ISMRT 2026",
    title: "Functional MRI compatible simultaneous cortical wide-field fluorescent Ca2+ and intrinsic oxy/deoxy-hemoglobin imaging",
    authors: "Taekyung Kang*, Francesca Mandino, Nicholas Allen, Omri Mano, Patrick Shamble, Jennifer Greenwood, Evelyn M. R. Lake",
    note: "Proceedings of the Cape Town 2026 Annual Meeting · Program #461-06-002",
  },
  {
    year: "2025",
    venue: "bioRxiv",
    title: "Longitudinal, simultaneous wide-field fluorescent Ca2+ imaging and fMRI in awake mice",
    authors: "Francesca Mandino*, Taekyung Kang, Xilin Shen, Corey Horien, Xenophon Papademetris, Stephen M. Strittmatter, Evelyn M. R. Lake*",
    href: "https://doi.org/10.1101/2025.10.27.684863",
  },
  {
    year: "2025",
    venue: "bioRxiv",
    title: "Transient AMPK activation by nutrient stress of high fat diet preserves cardiac electrophysiological stability and protects against arrhythmias",
    authors: "Matthew W. Rudokas*, Matthew McKay*, Xinyi Wu, et al., Taekyung Kang, et al., Fadi G. Akar",
    href: "https://doi.org/10.1101/2025.06.11.658631",
  },
  {
    year: "2025",
    venue: "Cell",
    title: "Cross-organ metabolite production and consumption in healthy and atherogenic conditions",
    authors: "Hyun-Seok Bae*, Seung-Min Jung*, Jisu Le, et al., Taekyung Kang, et al., Cholsoon Jang",
    href: "https://doi.org/10.1016/j.cell.2025.05.001",
    note: "Cell 188(16), 4441–4455.e16",
  },
  {
    year: "2025",
    venue: "Preprint",
    title: "Intestinal catabolism of dietary fructose promotes obesity and insulin resistance via ileal lacteal remodeling",
    authors: "Maria L. Lopez*, Taekyung Kang*, Alejandra Espeleta, et al., Cholsoon Jang",
    href: "https://doi.org/10.1101/2025.08.18.670963",
  },
  {
    year: "2024",
    venue: "JCI",
    title: "Arteriovenous metabolomics in pigs reveals CFTR regulation of metabolism in multiple organs",
    authors: "Hyun-Seok Bae*, Bo-Ram Kim*, Seung-Min Jung*, et al., Taekyung Kang, et al., Michael J. Welsh",
    href: "https://doi.org/10.1172/JCI174500",
    note: "The Journal of Clinical Investigation 134(13), e174500",
  },
  {
    year: "2023",
    venue: "JURBS",
    title: "Elucidating how fructose affects gut lacteal integrity via microbiota dysbiosis",
    authors: "Taekyung Kang*, Hyun-Seok Bae, Cholsoon Jang",
    note: "Journal of Undergraduate Research in the Biological Sciences 62(8)",
  },
];

const research: TimelineItem[] = [
  { date: "Jan 2025 — Present", title: "Graduate Researcher", place: "Yale Radiology & Biomedical Imaging", detail: "Advisor: Prof. Evelyn Lake · Multimodal wide-field optical microscopy and functional MRI." },
  { date: "Aug — Dec 2024", title: "Graduate Researcher", place: "Yale Internal Medicine", detail: "Advisor: Prof. Fadi Akar · Cardiac electrophysiology and metabolic stress." },
  { date: "Jun — Sep 2023", title: "Research Intern", place: "Stanford Cardiovascular Institute", detail: "Advisor: Prof. Ronglih Liao · Cellular cross talk in cardiac light chain amyloidosis." },
  { date: "Sep 2021 — Jul 2024", title: "Undergraduate Researcher", place: "UC Irvine School of Medicine, Biological Chemistry", detail: "Advisor: Prof. Cholsoon Jang · Nutrient metabolism, the gut lacteal, and cross-organ physiology." },
  { date: "May — Sep 2021", title: "Research Intern", place: "Seoul National University School of Medicine", detail: "Advisor: Prof. Yong-Tae Kwon · Molecular biology and protein homeostasis." },
];

const teaching: TimelineItem[] = [
  { date: "Sep 2025 — Feb 2026", title: "PATHS Mentor", place: "Yale School of Medicine", detail: "Mentored undergraduate and graduate students preparing for MD, MD/PhD, and PhD careers." },
  { date: "Aug — Dec 2025", title: "Teaching Fellow", place: "Yale School of Engineering & Applied Science", detail: "BENG 5410: Physical and Chemical Basis of Bioimaging and Biosensing · Prof. Douglas Rothman." },
  { date: "Sep 2023 — Jun 2024", title: "Teaching Assistant", place: "UC Irvine Department of Chemistry", detail: "CHEM 51C: Organic Chemistry · Prof. Susan King." },
  { date: "Jan 2021 — Mar 2024", title: "Undergraduate Student Mentor", place: "Korean Health Association, UC Irvine" },
];

const presentations = [
  { date: "Jul 2026", event: "Kenneth Rainin Foundation Innovation Summit", place: "San Francisco, CA", title: "Brain network signatures of repeated DSS-induced ulcerative colitis in mice" },
  { date: "Jun 2026", event: "Organization for Human Brain Mapping Annual Meeting", place: "Bordeaux, France", title: "fMRI Compatible Simultaneous Cortical Wide-Field Fluorescent Ca2+ and Intrinsic Hemodynamics Imaging" },
  { date: "May 2026", event: "ISMRM-ISMRT Annual Meeting", place: "Cape Town, South Africa", title: "Functional MRI compatible simultaneous cortical wide-field fluorescent Ca2+ and intrinsic oxy/deoxy-hemoglobin imaging" },
  { date: "Mar 2026", event: "Yale Biomedical Engineering Symposium", place: "West Haven, CT", title: "Application of multimodal WF imaging with fMRI to image multi-fluorescence" },
  { date: "Oct 2025", event: "Yale Biomedical Imaging Institute Dean’s Workshop", place: "New Haven, CT", title: "Simultaneous wide-field optical microscopy and functional magnetic resonance imaging 2.0" },
  { date: "Sep 2023", event: "Suh Kyungbae Foundation Annual Symposium", place: "Seoul, Korea", title: "The role of cellular cross talk via exosomes in cardiac light chain amyloidosis" },
  { date: "Aug 2023", event: "Stanford Summer Internship Symposium", place: "Stanford, CA", title: "The role of cellular cross talk via exosomes in cardiac light chain amyloidosis" },
  { date: "Apr 2023", event: "UC Irvine Excellence in Research", place: "Irvine, CA", title: "Elucidating How Fructose Affects Gut Lacteal Integrity via Microbiota Dysbiosis" },
  { date: "Jan 2022", event: "UC Irvine UROP", place: "Irvine, CA", title: "Elucidating the effect of Fructose Control over KHK-C Kinase" },
];

const honors = [
  ["2026–2027", "Computational Molecular & Functional Imaging Training (CMFIT) Program, Yale University"],
  ["2026", "Neurophotonics Summer Professional Development, Boston University"],
  ["2025–Present", "Advanced Graduate Leadership Program Fellow, Yale University"],
  ["2025–Present", "Physics, Engineering, and Biology Fellow, Yale University"],
  ["2024", "Cum Laude Scholar · Academic Research Award, UC Irvine"],
  ["2023", "Excellence in Research Fellowship, UC Irvine"],
  ["2022", "University Research Opportunity Program Fellow, UC Irvine"],
  ["2022–2024", "Dean’s Honors List, UC Irvine"],
  ["2018", "Presidential Volunteer Service Award"],
];

function SectionHeading({ number, children, id }: { number: string; children: React.ReactNode; id: string }) {
  return <div className="sectionHeading"><span>{number}</span><h2 id={id}>{children}</h2></div>;
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return <div className="timeline">{items.map((item) => (
    <article className="timelineItem" key={`${item.date}-${item.title}`}>
      <time>{item.date}</time>
      <div><h3>{item.title}</h3>{item.place && <p className="place">{item.place}</p>}{item.detail && <p>{item.detail}</p>}</div>
    </article>
  ))}</div>;
}

export default function Home() {
  return (
    <main className="shell">
      <aside className="profile">
        <div className="monogram" aria-hidden="true"><span>TK</span></div>
        <h1>Taekyung Kang</h1>
        <p className="role">Ph.D. Student in Biomedical Engineering</p>
        <p className="institution">Yale University</p>
        <p className="location">New Haven, Connecticut</p>
        <nav className="profileLinks" aria-label="Profile links">
          <a href="/Taekyung_Kang_CV.pdf">CV ↓</a>
          <a href="https://physics-engineering-biology.yale.edu/profile/taekyung-kang" target="_blank" rel="noreferrer">Yale PEB ↗</a>
          <a href="https://www.linkedin.com/in/taekyung-kang-3a21a9264" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </nav>
        <nav className="sectionNav" aria-label="Page sections">
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#presentations">Presentations</a>
          <a href="#honors">Honors &amp; leadership</a>
        </nav>
        <p className="updated">CV updated August 2026</p>
      </aside>

      <article className="content">
        <section className="intro" aria-labelledby="about-heading">
          <p className="eyebrow">Biomedical imaging · Multimodal neuroscience</p>
          <h2 id="about-heading">About me</h2>
          <p className="lede">I build multimodal imaging approaches that connect cellular physiology with whole-brain functional dynamics.</p>
          <p>I am a Ph.D. student in Biomedical Engineering at Yale University, advised by Professor Evelyn Lake in Radiology &amp; Biomedical Imaging. My current research combines wide-field optical microscopy with functional MRI to study brain function across scales.</p>
          <p>Before Yale, I investigated cardiac electrophysiology, cross-organ metabolism, and intestinal biology at Stanford and UC Irvine. Across these systems, I am interested in engineering rigorous measurements that translate between molecular mechanisms and organ-level function.</p>
        </section>

        <section aria-labelledby="direction-heading">
          <SectionHeading number="01" id="direction-heading">Research direction</SectionHeading>
          <div className="focusGrid">
            <div><span>01</span><strong>Multimodal imaging</strong><p>Simultaneous optical and MR measurements across spatial and temporal scales.</p></div>
            <div><span>02</span><strong>Systems neuroscience</strong><p>Brain-wide signatures of physiology and disease in translational models.</p></div>
            <div><span>03</span><strong>Quantitative biology</strong><p>Integrated tools for reproducible, mechanistic biological measurement.</p></div>
          </div>
        </section>

        <section id="news" aria-labelledby="news-heading">
          <SectionHeading number="02" id="news-heading">Recent highlights</SectionHeading>
          <div className="newsList">
            <p><time>2026</time><span>Presented multimodal imaging work at OHBM in Bordeaux and ISMRM in Cape Town.</span></p>
            <p><time>2026</time><span>Joined Yale’s CMFIT training program and Boston University’s Neurophotonics professional development program.</span></p>
            <p><time>2025</time><span>Co-authored research in <em>Cell</em>, <em>The Journal of Clinical Investigation</em>, and new bioRxiv work spanning brain, heart, and metabolism.</span></p>
          </div>
        </section>

        <section id="publications" aria-labelledby="pub-heading">
          <SectionHeading number="03" id="pub-heading">Publications</SectionHeading>
          <p className="sectionIntro">* denotes a presenting or co-first author. Titles link to the DOI when available.</p>
          <div className="publicationList">
            {publications.map((paper, index) => (
              <article className="publication" key={paper.title}>
                <div className="pubNumber">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <div className="pubMeta"><span>{paper.venue}</span><time>{paper.year}</time></div>
                  <h3>{paper.href ? <a href={paper.href} target="_blank" rel="noreferrer">{paper.title} ↗</a> : paper.title}</h3>
                  <p>{paper.authors}</p>
                  {paper.note && <p className="pubNote">{paper.note}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" aria-labelledby="education-heading">
          <SectionHeading number="04" id="education-heading">Education</SectionHeading>
          <div className="educationGrid">
            <article><time>2025 — Present</time><h3>Yale University</h3><p>Ph.D. in Biomedical Engineering</p><small>Advisor: Professor Evelyn Lake · New Haven, CT</small></article>
            <article><time>2018 — 2024</time><h3>University of California, Irvine</h3><p>B.S. in Biological Sciences<br/>B.S. in Bioinformatics</p><small>Cum laude · Irvine, CA</small></article>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <SectionHeading number="05" id="experience-heading">Research experience</SectionHeading>
          <Timeline items={research} />
        </section>

        <section id="teaching" aria-labelledby="teaching-heading">
          <SectionHeading number="06" id="teaching-heading">Teaching &amp; mentorship</SectionHeading>
          <Timeline items={teaching} />
        </section>

        <section id="presentations" aria-labelledby="presentations-heading">
          <SectionHeading number="07" id="presentations-heading">Selected presentations</SectionHeading>
          <div className="presentationList">{presentations.map((item) => (
            <article key={`${item.date}-${item.event}`}><time>{item.date}</time><div><h3>{item.title}</h3><p>{item.event} · {item.place}</p></div></article>
          ))}</div>
        </section>

        <section id="honors" aria-labelledby="honors-heading">
          <SectionHeading number="08" id="honors-heading">Honors &amp; development</SectionHeading>
          <div className="compactList">{honors.map(([date, label]) => <p key={`${date}-${label}`}><time>{date}</time><span>{label}</span></p>)}</div>
        </section>

        <section id="leadership" aria-labelledby="leadership-heading">
          <SectionHeading number="09" id="leadership-heading">Leadership &amp; community</SectionHeading>
          <div className="leadershipGrid">
            <article><time>2026 — Present</time><h3>President</h3><p>Yale Korean Tennis Club</p></article>
            <article><time>2026 — Present</time><h3>President</h3><p>Korean Graduate Student Association at Yale</p></article>
            <article><time>2017 — 2026</time><h3>Fellow</h3><p>Korean-American Scientists and Engineers Association</p></article>
            <article><time>2025 — 2026</time><h3>Board Member</h3><p>YKTC and KGSA at Yale</p></article>
            <article><time>2022 — 2024</time><h3>Board Member</h3><p>HACK-UC and LIKELION at UCI</p></article>
            <article><time>2019 — 2020</time><h3>Medical Assistant</h3><p>Busan Medical Center and Inje University Paik Hospital</p></article>
          </div>
        </section>

        <footer><p>Built from my August 2026 curriculum vitae.</p><a href="#top" aria-label="Back to top">Back to top ↑</a></footer>
      </article>
    </main>
  );
}
