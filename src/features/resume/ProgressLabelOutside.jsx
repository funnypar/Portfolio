import { Progress, Typography } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export default function ProgressLabelOutside({ label, value }) {
    return (
        <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
                <Typography
                    color="white"
                    variant="small"
                    className="font-semibold"
                >
                    {label}
                </Typography>
                <Typography
                    color="white"
                    variant="small"
                    className="font-semibold"
                >
                    {value}%
                </Typography>
            </div>
            <Progress
                value={value}
                color="blue"
                size="sm"
                className="outline outline-1 outline-offset-2 outline-me "
            />
        </div>
    );
}
