export class Job {

  constructor(
    public layer_id: string,
    public s3_endpoint: string,
    public res_high: number,
    public res_low?: number,
    public srid?: number,
    public bbox_minx?: number,
    public bbox_miny?: number,
    public bbox_maxx?: number,
    public bbox_maxy?: number,
    public mail?: string
  ) {  }

}

