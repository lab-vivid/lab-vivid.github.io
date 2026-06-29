export type MemberLink = {
  label: string;
  href: string;
};

export type Student = {
  /** English name, given-name-first (e.g. "Donggeun Ko"). */
  name: string;
  /** Degree status, e.g. "Ph.D. Student" / "Undergraduate Researcher". */
  role: string;
  /** Filename under src/assets/people/. Omit when no photo yet — a placeholder is rendered. */
  photo?: string;
  email?: string;
  /** External profiles (homepage, GitHub, Google Scholar...). Only include what exists. */
  links?: MemberLink[];
  /**
   * Reserved for a future single research-keyword chip tied to the four pillars,
   * once each student's focus is settled. Intentionally unused in v1.
   */
  focus?: string;
  /**
   * false = romanized placeholder pending the student's confirmed English spelling
   * (collected at first launch). Used only as an internal reminder, not rendered.
   */
  nameConfirmed?: boolean;
};

/** Ordered by seniority: Ph.D. first, then undergraduate researchers. */
export const students: Student[] = [
  {
    name: "Donggeun Ko",
    // Incoming part-time Ph.D. joining 2027; currently at aimfuture and collaborating.
    role: "Incoming Ph.D. Student · 2027",
    // email omitted: company (aimfuture) address not used here, institutional pending;
    // Website already covers contact.
    links: [{ label: "Website", href: "https://seanko29.github.io/" }],
    nameConfirmed: true,
  },
  {
    name: "Seonghyeon Park",
    role: "Undergraduate Researcher",
    photo: "seonghyeon.jpg",
    email: "hyun0317@seoultech.ac.kr",
    nameConfirmed: false,
  },
  {
    name: "Hyeonseong Park",
    role: "Undergraduate Researcher",
    // email omitted: institutional (@seoultech.ac.kr) address pending; personal Gmail not published.
    nameConfirmed: false,
  },
  {
    name: "Yunjae Jeong",
    role: "Undergraduate Researcher",
    photo: "yunjae.jpg",
    email: "fnsckdl@seoultech.ac.kr",
    nameConfirmed: false,
  },
];
