import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M3 1a2 2 0 0 0-2 2v4.5h2V3h5V1zM1 17v-5.5h2V17h5v2H3a2 2 0 0 1-2-2m11 0v2h5a2 2 0 0 0 2-2v-5.5h-2V17zm5-9.5h2V3a2 2 0 0 0-2-2h-5v2h5z"
        />
        <path
          fill="currentColor"
          d="M6 5h8v1H6zM5 8h10v1H5zm1 3h8v1H6zm-1 3h10v1H5z"
        />
      </svg>
    ),
    title: "Document OCR",
    paragraph:
      "Our OCR technology extracts and processes text from any document with speed and precision. Never worry about manual data entry again—rely on our system to capture essential details accurately.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"
        />
      </svg>
    ),
    title: "Facial Capture",
    paragraph:
      "Seamlessly capture and verify facial data from documents, ensuring a secure and smooth onboarding experience. Our solution minimizes fraud by confirming identity through facial matching.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 26 26"
      >
        <path
          fill="currentColor"
          d="M6.594 1c-1.419 0-2.903.917-4.219 2.625S.041 7.907.094 11.313c0 1.626.519 3.43 1.5 4.937c.144.222.393.355.562.563c-.688.831-1.875 2.406-1.875 2.406a1 1 0 1 0 1.438 1.375s1.203-1.61 1.843-2.375c.738.469 1.582.781 2.532.781c1.708 0 3.312-.817 4.687-1.938c.195-.158.313-.391.5-.562c.441.309.96.5 1.531.5c.959 0 1.773-.457 2.47-1c.696-.543 1.293-1.197 1.843-1.844c.369-.434.639-.794.938-1.156c-.037.471-.067.935-.063 1.375c.002.23.012.437.094.719c.04.14.076.334.25.531s.528.375.843.375c.817 0 1.425-.458 1.875-.906c.45-.449.811-.965 1.22-1.438C23.096 12.711 23.88 12 25 12a1 1 0 1 0 0-2c-1.98 0-3.31 1.29-4.219 2.344c-.282.327-.494.55-.718.812c.002-.036-.003-.057 0-.094c.038-.508.1-1.003.062-1.5a2.2 2.2 0 0 0-.188-.812c-.14-.306-.608-.75-1.125-.75c-.541 0-.846.238-1.093.438s-.463.432-.688.687c-.45.51-.925 1.116-1.437 1.719c-.513.603-1.056 1.199-1.563 1.594c-.506.394-.927.562-1.219.562c-.066 0-.1-.113-.156-.125c.527-.633 1.175-1.177 1.594-1.844c.913-1.456 1.548-2.897 1.75-4.156c.101-.63.137-1.242-.156-1.844C15.55 6.43 14.784 6 14.094 6c-1.345 0-2.476.87-3.25 2.031c-.775 1.162-1.25 2.686-1.25 4.375c0 .877.275 1.614.562 2.344c-.238.23-.41.55-.656.75c-1.156.942-2.365 1.5-3.406 1.5c-.453 0-.857-.198-1.25-.406c.467-.622.503-.54 1-1.282C7.892 12.253 10 8.343 10 4.595c0-.445-.03-1.25-.5-2.063S7.982 1 6.594 1m0 2c.812 0 .976.22 1.156.531S8 4.339 8 4.594c0 2.952-1.892 6.709-3.844 9.625c-.399.596-.399.514-.781 1.031c-.027-.04-.067-.053-.094-.094c-.744-1.143-1.187-2.67-1.187-3.844v-.03c-.047-2.995.84-5.065 1.875-6.407C5.003 3.533 6.312 3 6.594 3m7.437 5.031c.014.074.052.206 0 .531c-.129.804-.657 2.113-1.469 3.407c-.223.355-.583.62-.843.969c-.024-.208-.125-.304-.125-.532c0-1.31.38-2.493.906-3.281c.502-.754 1.083-1.065 1.531-1.094M0 23v2h26v-2z"
        />
      </svg>
    ),
    title: "Signature Capture",
    paragraph:
      "Extract signatures directly from documents, offering a reliable way to authenticate documents digitally. Enhance security and trust with our signature capture service.",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M11.607 2.342a.6.6 0 0 1 .787 0l1.948 1.692a.6.6 0 0 0 .445.145l2.572-.224a.6.6 0 0 1 .636.463l.582 2.514a.6.6 0 0 0 .275.38l2.212 1.33a.6.6 0 0 1 .243.748l-1.008 2.376a.6.6 0 0 0 0 .468l1.008 2.376a.6.6 0 0 1-.243.749l-2.212 1.33a.6.6 0 0 0-.275.379l-.582 2.514a.6.6 0 0 1-.636.463l-2.572-.224a.6.6 0 0 0-.445.144l-1.949 1.693a.6.6 0 0 1-.787 0l-1.948-1.693a.6.6 0 0 0-.445-.144l-2.572.224a.6.6 0 0 1-.636-.463l-.582-2.514a.6.6 0 0 0-.275-.38l-2.212-1.33a.6.6 0 0 1-.243-.748l1.008-2.376a.6.6 0 0 0 0-.468L2.693 9.39a.6.6 0 0 1 .243-.749l2.212-1.33a.6.6 0 0 0 .275-.379l.582-2.514a.6.6 0 0 1 .636-.463l2.572.224a.6.6 0 0 0 .445-.145z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9 13l2 2l5-5"
          />
        </g>
      </svg>
    ),
    title: "Liveliness Check",
    paragraph:
      "Confirm real-time user presence with our liveliness detection. Prevent fraud by verifying that the person interacting with your service is physically present and authentic.",
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 14 14"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M1.573 1.573A.25.25 0 0 1 1.75 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5A1.75 1.75 0 0 0 0 1.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.25.25 0 0 1 .073-.177M14 10.75a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-1.5a.75.75 0 0 0 0 1.5h1.5A1.75 1.75 0 0 0 14 12.25zM.75 10a.75.75 0 0 1 .75.75v1.5a.25.25 0 0 0 .25.25h1.5a.75.75 0 0 1 0 1.5h-1.5A1.75 1.75 0 0 1 0 12.25v-1.5A.75.75 0 0 1 .75 10m10-10a.75.75 0 0 0 0 1.5h1.5a.25.25 0 0 1 .25.25v1.5a.75.75 0 0 0 1.5 0v-1.5A1.75 1.75 0 0 0 12.25 0zM7 7.776a4.42 4.42 0 0 0-4.145 2.879c-.112.299.127.595.446.595h7.396c.32 0 .558-.296.447-.595a4.42 4.42 0 0 0-4.145-2.879Zm2.208-3.315a2.21 2.21 0 1 1-4.421 0a2.21 2.21 0 0 1 4.421 0"
          clip-rule="evenodd"
        />
      </svg>
    ),
    title: "Similarity Service",
    paragraph:
      "Match and compare user data with document information seamlessly. Ensure alignment between the information provided and what's on record, reducing errors and increasing confidence in every verification.",
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 48 48"
      >
        <defs>
          <mask id="ipSTableReport0">
            <g fill="none" stroke-linejoin="round" stroke-width="4">
              <path
                fill="#fff"
                stroke="#fff"
                d="M5 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v37H8a3 3 0 0 1-3-3z"
              />
              <path
                stroke="#fff"
                d="M35 24a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v17a3 3 0 0 1-3 3h-5z"
              />
              <path stroke="#000" stroke-linecap="round" d="M11 12h8m-8 7h12" />
            </g>
          </mask>
        </defs>
        <path
          fill="currentColor"
          d="M0 0h48v48H0z"
          mask="url(#ipSTableReport0)"
        />
      </svg>
    ),
    title: "Document Report with KPIs",
    paragraph:
      "Get in-depth reports enriched with key performance indicators for each document. Our detailed insights empower smarter, data-driven decisions and ensure thorough compliance.",
  },
];
export default featuresData;
