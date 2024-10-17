declare variable $nameAward external;
declare variable $id external;
declare variable $idn external;
declare variable $year external;
declare variable $work external;

replace value of node
//awards/award[@id=$id]/nameAward
with $nameAward,

replace value of node
//awards/award[@id=$id]/nomination[@id=$idn]/year
with $year,

replace value of node
//awards/award[@id=$id]/nomination[@id=$idn]/work
with $work