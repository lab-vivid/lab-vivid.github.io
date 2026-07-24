export type MemberLink = {
  label: string;
  href: string;
};

export type Member = {
  /** English name, given-name-first (e.g. "Donggeun Ko"). */
  name: string;
  /** Role/status, e.g. "Ph.D. Student" / "Undergraduate Researcher" / "Collaborating Researcher". */
  role: string;
  /** Filename under src/assets/people/. Omit when no photo yet — a placeholder is rendered. */
  photo?: string;
  email?: string;
  /** External profiles (homepage, GitHub, Google Scholar, LinkedIn...). Only include what exists. */
  links?: MemberLink[];
  /**
   * Reserved for a future single research-keyword chip tied to the four pillars,
   * once each member's focus is settled. Intentionally unused in v1.
   */
  focus?: string;
  /**
   * false = romanized placeholder pending the member's confirmed English spelling
   * (collected at first launch). Used only as an internal reminder, not rendered.
   */
  nameConfirmed?: boolean;
};

/** Ordered by seniority: Ph.D. first, then undergraduate researchers. */
export const students: Member[] = [
  {
    name: "Donggeun Ko",
    // Incoming part-time Ph.D. joining 2027; currently at aimfuture and collaborating.
    role: "Incoming Ph.D. Student · 2027",
    photo: "donggeun.jpg",
    // email omitted: company (aimfuture) address not used here, institutional pending;
    // Website and Google Scholar cover contact.
    links: [
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=SrYKBGQAAAAJ&hl=en",
      },
      { label: "GitHub", href: "https://github.com/seanko29" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/donggeun-sean-ko-b78b57186/" },
      { label: "Homepage", href: "https://seanko29.github.io/" },
    ],
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
    photo: "hyeonseong.jpg",
    email: "phs0916@seoultech.ac.kr",
    // Passport reads "PARK HYEONSEONG"; displayed given-name-first to match the other cards.
    nameConfirmed: true,
  },
  {
    name: "Yunjae Jeong",
    role: "Undergraduate Researcher",
    photo: "yunjae.jpg",
    email: "fnsckdl@seoultech.ac.kr",
    // Confirmed by the student (given as "Jeong YunJae", family-first); displayed
    // given-name-first to match the other cards.
    nameConfirmed: true,
  },
  {
    name: "Junu Kim",
    role: "Undergraduate Researcher",
    photo: "junu.jpg",
    email: "sugw71@seoultech.ac.kr",
    links: [
      { label: "GitHub", href: "https://github.com/MelonChicken" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/junu-kim-076481344/" },
      { label: "Homepage", href: "https://melonchicken.github.io/" },
    ],
    nameConfirmed: true,
  },
];

/** External collaborators (not lab members). */
export const collaborators: Member[] = [
  {
    name: "Yunsung Lee",
    // External research collaborator; ongoing paper collaboration. Company title
    // removed at the user's request; labeled with the user's preferred wording.
    // Personal Gmail used by request — no institutional address as he is external.
    role: "Cooperative Research Fellow",
    photo: "yunsung.png",
    email: "dldbstjd9751@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/alohays" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yunsung-lee-23a926150/" },
    ],
    nameConfirmed: true,
  },
];
