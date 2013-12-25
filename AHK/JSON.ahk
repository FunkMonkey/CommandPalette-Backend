JSON := Object("stringify", "json_stringify")

json_stringify(jsonObj) {
		res := "{ "

		For key, value in jsonObj {
			res .= """" . key . """: "

			if value is number 
			{
				res .= value
			}
			else 
			{
				res .= """" . value . """"
			}
			res .= ", "
		}
		StringTrimRight, res, res, 2 ; remove last comma
		res .= " }"
		return res
	}

