import { VerticalTimelineElement } from "react-vertical-timeline-component";
export default function Timeline({ experience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#002929", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #002929" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img src={experience.icon} alt={experience.company_name} className="h-[70%] w-[70%] object-contain" />
        </div>
      }>
      <div>
        <h4 className="text-2xl font-bold text-white">{experience.title}</h4>
        <p className="text-dimWhite !mt-0 text-sm font-semibold">{experience.company_name}</p>
      </div>
      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="pl-1 text-sm tracking-wider text-white-100">
            {point}
          </li>
        ))}
      </ul>
      <p>{experience.description}</p>
    </VerticalTimelineElement>
  );
}
