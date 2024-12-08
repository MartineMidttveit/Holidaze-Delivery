import icons from "../../utils/icons";
import formatTime from "../../utils/formatTime";

export function VenueDateInfoDesktop({ data }) {
  const { date: updatedDate, time: updatedTime } = formatTime(data.updated);
  const { date: createdDate, time: createdTime } = formatTime(data.created);

  return (
    <div className="hidden xl:flex flex-col border-t border-b xl:border-b-0 border-primary py-6 2xl:pt-8 xl:w-full">
      
      <div className="flex flex-col gap-2">
        <button type="button" className="flex items-center gap-3 font-medium text-sm lg:text-base" disabled>
              <icons.shareIcon />
              Share the venue
        </button>

        <button
          type="button"
          className="flex items-center gap-3 font-medium text-sm lg:text-base"
          disabled
        >
          <icons.reportIcon />
          Report the venue
        </button>
      </div>
        

      <p className="text-secondary pt-3 text-sm lg:text-base">
        Last updated: <span>{updatedDate}</span>, <span>{updatedTime}</span>
      </p>

      <p className="text-secondary pt-1 text-sm lg:text-base">
        Created: <span>{createdDate}</span>, <span>{createdTime}</span>
      </p>
    </div>
  );
}

export function VenueDateInfoMobile({ data }) {
  const { date: updatedDate, time: updatedTime } = formatTime(data.updated);
  const { date: createdDate, time: createdTime } = formatTime(data.created);

  return (
    <div className="xl:hidden flex flex-col border-t border-primary pt-6 pb-8">

    <div className="flex flex-col gap-2 text-sm lg:text-base font-medium">
      <button type="button" className="flex items-center gap-3" disabled>
                <icons.shareIcon />
                Share the venue
        </button>

        <button disabled type="button" className="flex items-center gap-3 ">
          <icons.reportIcon />
        Report the venue
      </button>
    </div>

      <p className="text-secondary pt-3 text-sm">
        Last updated: <span>{updatedDate}</span>, <span>{updatedTime}.</span>
      </p>
      <p className="text-secondary pt-1 text-sm">
        Created: <span>{createdDate}</span>, <span>{createdTime}.</span>
      </p>
    </div>
  );
}
